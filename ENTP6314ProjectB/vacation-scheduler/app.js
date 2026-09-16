// ===========================================================================
// APP — the screen, and everything you click.
//
// Everything on screen is drawn from `state`. Any change updates state, then
// calls render(), so what you see always matches the underlying schedule.
// ===========================================================================

var state = {
  rules: RULES,
  weeks: buildCalendar(RULES.year, RULES),
  employees: buildEmployees(RULES),
  requests: [],
  lastAllocation: null
};

// ---------------------------------------------------------------------------
// Working with the schedule
// ---------------------------------------------------------------------------

function findEmployee(employeeId) {
  return state.employees.filter(function (e) { return e.id === employeeId; })[0];
}

function toggleWeek(employeeId, weekNumber) {
  var employee = findEmployee(employeeId);
  if (!employee) return;

  var existing = employee.assignedWeeks.filter(function (a) {
    return a.week === weekNumber;
  })[0];

  if (existing) {
    employee.assignedWeeks = employee.assignedWeeks.filter(function (a) {
      return a.week !== weekNumber;
    });
  } else {
    employee.assignedWeeks.push({ week: weekNumber, method: "manual" });
  }

  render();
}

function currentViolations() {
  return validateSchedule(state.employees, state.weeks, state.rules, state.requests);
}

// ---------------------------------------------------------------------------
// Drawing the grid
// ---------------------------------------------------------------------------

function render() {
  var violations = currentViolations();
  renderGrid(violations);
  renderViolations(violations);
  renderSubtitle(violations);
}

function renderSubtitle(violations) {
  var errors = errorsOnly(violations).length;
  var assigned = state.employees.reduce(function (sum, e) {
    return sum + e.assignedWeeks.length;
  }, 0);

  document.getElementById("header-subtitle").textContent =
    state.employees.length + " employees · " + state.weeks.length + " weeks · " +
    assigned + " weeks assigned · " +
    (errors === 0 ? "no rule problems" : errors + " rule problem" + (errors === 1 ? "" : "s"));
}

function renderGrid(violations) {
  // Which cells, weeks and employees are implicated in a problem.
  var badCells = {};
  var badWeeks = {};
  var badEmployees = {};

  violations.forEach(function (v) {
    if (v.severity !== "error") return;
    if (v.employeeId && v.weekNumber) badCells[v.employeeId + ":" + v.weekNumber] = true;
    else if (v.weekNumber) badWeeks[v.weekNumber] = true;
    else if (v.employeeId) badEmployees[v.employeeId] = true;
  });

  var occupancy = weekOccupancy(state.employees, state.weeks);

  // ---- header row ----
  var html = "<thead><tr><th class='sticky-col'>Employee</th>";
  state.weeks.forEach(function (w) {
    var cls = "week-head";
    if (w.isExcludedFromSeniority) cls += " head-lottery";
    else if (w.isSummer) cls += " head-summer";
    if (badWeeks[w.weekNumber]) cls += " head-error";
    html += "<th class='" + cls + "' title='" + w.label +
            (w.holidays.length ? " — " + w.holidays.join(", ") : "") + "'>" +
            w.weekNumber + "</th>";
  });
  html += "<th class='sticky-right'>Total</th></tr>";

  // ---- occupancy row ----
  html += "<tr><th class='sticky-col subtle'>People out</th>";
  state.weeks.forEach(function (w) {
    var count = occupancy[w.weekNumber].length;
    var over = count > state.rules.maxConcurrentOnVacation;
    html += "<td class='count-cell" + (over ? " count-over" : "") + "'>" + count + "</td>";
  });
  html += "<td class='sticky-right subtle'>/" + state.rules.maxConcurrentOnVacation + "</td></tr></thead><tbody>";

  // ---- one row per employee ----
  state.employees.forEach(function (employee) {
    var assignedLookup = {};
    employee.assignedWeeks.forEach(function (a) { assignedLookup[a.week] = a.method; });

    var rowClass = employee.isSeniorTier ? "row-senior" : "";
    html += "<tr class='" + rowClass + "'>";
    html += "<th class='sticky-col' title='Seniority rank " + employee.seniorityRank +
            (employee.isSeniorTier ? " — senior tier" : "") + "'>" +
            employee.seniorityRank + ". " + employee.name + "</th>";

    state.weeks.forEach(function (w) {
      var method = assignedLookup[w.weekNumber];
      var cls = "cell";

      if (method) {
        if (w.isExcludedFromSeniority) cls += " cell-lottery";
        else if (w.isSummer) cls += " cell-summer";
        else cls += " cell-on";
      } else {
        if (w.isExcludedFromSeniority) cls += " cell-lottery-empty";
        else if (w.isSummer) cls += " cell-summer-empty";
      }

      if (badCells[employee.id + ":" + w.weekNumber]) cls += " cell-error";

      html += "<td class='" + cls + "' data-emp='" + employee.id +
              "' data-week='" + w.weekNumber + "'></td>";
    });

    // ---- total for this employee ----
    var total = employee.assignedWeeks.length;
    var ceiling = effectiveMaxWeeks(employee, state.requests);
    var totalCls = "sticky-right total-cell";
    if (total < employee.minWeeks) totalCls += " total-under";
    else if (ceiling !== null && total > ceiling) totalCls += " total-over";
    else totalCls += " total-ok";

    html += "<td class='" + totalCls + "'>" + total + " / " +
            (ceiling === null ? employee.minWeeks + "+" : ceiling) + "</td></tr>";
  });

  html += "</tbody>";
  document.getElementById("grid").innerHTML = html;
}

function renderViolations(violations) {
  var errors = errorsOnly(violations);
  var warnings = warningsOnly(violations);
  var box = document.getElementById("violations");

  var html = "<h2>Rule check</h2>";

  if (errors.length === 0 && warnings.length === 0) {
    html += "<p class='all-clear'>Everything checks out. No rules are being broken.</p>";
  }

  if (errors.length > 0) {
    html += "<p class='violation-heading error-heading'>" + errors.length +
            " problem" + (errors.length === 1 ? "" : "s") + "</p><ul class='violation-list'>";
    errors.forEach(function (v) {
      html += "<li class='violation-error'>" + v.message + "</li>";
    });
    html += "</ul>";
  }

  if (warnings.length > 0) {
    html += "<p class='violation-heading warning-heading'>" + warnings.length +
            " warning" + (warnings.length === 1 ? "" : "s") + "</p><ul class='violation-list'>";
    warnings.forEach(function (v) {
      html += "<li class='violation-warning'>" + v.message + "</li>";
    });
    html += "</ul>";
  }

  box.innerHTML = html;
}

// ---------------------------------------------------------------------------
// The self-checks tab
// ---------------------------------------------------------------------------

function renderChecksTab() {
  var rules = state.rules;
  var weeks = state.weeks;
  var seniorCount = state.employees.filter(function (e) { return e.isSeniorTier; }).length;
  var capacity = rules.maxConcurrentOnVacation * rules.weeksInYear;
  var floorDemand = state.employees.length * rules.minWeeksPerEmployee;
  var maxDemand = (seniorCount * rules.seniorTierMaxWeeks) +
                  ((state.employees.length - seniorCount) * rules.minWeeksPerEmployee);

  function row(label, value) {
    return "<tr><th>" + label + "</th><td>" + value + "</td></tr>";
  }

  document.getElementById("rules-summary").innerHTML =
    '<table class="summary-table">' +
    row("Year", rules.year) +
    row("Employees", state.employees.length + " (" + seniorCount + " senior tier)") +
    row("Minimum weeks each", rules.minWeeksPerEmployee) +
    row("Senior tier maximum", rules.seniorTierMaxWeeks + " weeks") +
    row("Everyone else maximum", "no hard ceiling") +
    row("Coverage cap", "max " + rules.maxConcurrentOnVacation + " people out per week") +
    row("Total capacity", capacity + " employee-weeks") +
    row("Needed at the minimum", floorDemand + " (" + (capacity - floorDemand) + " to spare)") +
    row("Needed if seniors take " + rules.seniorTierMaxWeeks,
        maxDemand + " (" + (capacity - maxDemand) + " to spare)") +
    "</table>";

  var results = runSelfChecks();
  var failed = results.filter(function (r) { return !r.passed; }).length;

  document.getElementById("self-checks").innerHTML =
    '<p class="check-summary ' + (failed === 0 ? "all-pass" : "some-fail") + '">' +
    (failed === 0 ? "All " + results.length + " checks pass."
                  : failed + " of " + results.length + " checks FAILED.") +
    "</p><ul class='check-list'>" +
    results.map(function (r) {
      return '<li class="' + (r.passed ? "check-pass" : "check-fail") + '">' +
             (r.passed ? "PASS" : "FAIL") + " — " + r.label +
             ' <span class="check-detail">(' + r.detail + ")</span></li>";
    }).join("") + "</ul>";

  var occupancy = weekOccupancy(state.employees, weeks);
  var tableHtml = "<thead><tr><th>Week</th><th>Dates</th><th>Type</th>" +
                  "<th>Notes</th><th>People out</th></tr></thead><tbody>";

  weeks.forEach(function (w) {
    var type = "Normal";
    var rowCls = "";
    if (w.isExcludedFromSeniority) { type = "Lottery"; rowCls = "row-lottery"; }
    else if (w.isSummer) { type = "Summer"; rowCls = "row-summer"; }

    tableHtml += "<tr class='" + rowCls + "'>" +
      "<td>" + w.weekNumber + "</td>" +
      "<td>" + formatDateLong(w.startDate) + " – " + formatDateLong(w.endDate) + "</td>" +
      "<td>" + type + "</td>" +
      "<td>" + w.holidays.join(", ") + "</td>" +
      "<td>" + occupancy[w.weekNumber].length + " / " +
      state.rules.maxConcurrentOnVacation + "</td></tr>";
  });

  document.getElementById("week-table").innerHTML = tableHtml + "</tbody>";
}

// ---------------------------------------------------------------------------
// Buttons and tabs
// ---------------------------------------------------------------------------

function setNote(text) {
  document.getElementById("toolbar-note").textContent = text || "";
}

document.getElementById("grid").addEventListener("click", function (event) {
  var cell = event.target.closest("td[data-emp]");
  if (!cell) return;
  toggleWeek(cell.getAttribute("data-emp"), Number(cell.getAttribute("data-week")));
  setNote("");
});

document.getElementById("btn-allocate").addEventListener("click", function () {
  var assigned = state.employees.reduce(function (s, e) {
    return s + e.assignedWeeks.length;
  }, 0);

  if (assigned > 0 &&
      !confirm("This replaces the whole schedule with a freshly generated one. " +
               "Any hand-edits will be lost. Continue?")) {
    return;
  }

  var result = autoAllocate(state.rules, state.weeks);
  state.employees = result.employees;
  state.lastAllocation = result;

  if (result.unresolved.length > 0) {
    setNote(result.unresolved.length + " employee(s) could not be fully placed — see the panel.");
  } else {
    setNote("Schedule generated. Everyone reached their minimum.");
  }

  render();
});

document.getElementById("btn-clear").addEventListener("click", function () {
  if (!confirm("Clear every assigned week and start from an empty schedule?")) return;
  state.employees.forEach(function (e) { e.assignedWeeks = []; });
  setNote("Schedule cleared.");
  render();
});

document.getElementById("tabs").addEventListener("click", function (event) {
  var button = event.target.closest(".tab-button");
  if (!button) return;

  var target = button.getAttribute("data-tab");

  Array.prototype.forEach.call(document.querySelectorAll(".tab-button"), function (b) {
    b.classList.toggle("active", b === button);
  });
  Array.prototype.forEach.call(document.querySelectorAll(".tab-panel"), function (panel) {
    panel.classList.toggle("hidden", panel.id !== "tab-" + target);
  });

  // The self-checks are slow enough to be worth running only when looked at.
  if (target === "checks") renderChecksTab();
});

// ---------------------------------------------------------------------------
render();
