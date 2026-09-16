// ===========================================================================
// PREVIEW — temporary Phase 1 page that prints the calendar so it can be
// eyeballed before the real scheduling UI is built. Replaced in a later phase.
// ===========================================================================

(function () {
  var weeks = buildCalendar(RULES.year, RULES);
  var employees = buildEmployees(RULES);
  var lottery = lotteryWeekNumbers(weeks);
  var summer = summerWeekNumbers(weeks);

  // ---- Rules summary ------------------------------------------------------
  var seniors = employees.filter(function (e) { return e.isSeniorTier; });
  var capacity = RULES.maxConcurrentOnVacation * RULES.weeksInYear;
  var floorDemand = employees.length * RULES.minWeeksPerEmployee;
  var maxDemand = (seniors.length * RULES.seniorTierMaxWeeks) +
                  ((employees.length - seniors.length) * RULES.minWeeksPerEmployee);

  document.getElementById("rules-summary").innerHTML =
    '<table class="summary-table">' +
    row("Year", RULES.year) +
    row("Employees", employees.length + " (" + seniors.length + " senior tier)") +
    row("Minimum weeks each", RULES.minWeeksPerEmployee) +
    row("Senior tier maximum", RULES.seniorTierMaxWeeks + " weeks") +
    row("Other 14 maximum", "no hard ceiling (auto-allocator targets " +
        RULES.autoAllocateNonSeniorTarget + ")") +
    row("Coverage cap", "max " + RULES.maxConcurrentOnVacation + " people out per week") +
    row("Total capacity", capacity + " employee-weeks") +
    row("Needed at the 9-week floor", floorDemand + " (" + (capacity - floorDemand) + " to spare)") +
    row("Needed if seniors take 17", maxDemand + " (" + (capacity - maxDemand) + " to spare)") +
    '</table>';

  function row(label, value) {
    return "<tr><th>" + label + "</th><td>" + value + "</td></tr>";
  }

  // ---- Self-checks --------------------------------------------------------
  var results = runSelfChecks();
  var failed = results.filter(function (r) { return !r.passed; }).length;

  var checkHtml = results.map(function (r) {
    return '<li class="' + (r.passed ? "check-pass" : "check-fail") + '">' +
           (r.passed ? "PASS" : "FAIL") + " — " + r.label +
           ' <span class="check-detail">(' + r.detail + ")</span></li>";
  }).join("");

  document.getElementById("calendar-check").innerHTML =
    '<p class="check-summary ' + (failed === 0 ? "all-pass" : "some-fail") + '">' +
    (failed === 0
      ? "All " + results.length + " checks pass."
      : failed + " of " + results.length + " checks FAILED.") +
    "</p><ul class='check-list'>" + checkHtml + "</ul>";

  // ---- What the auto-allocator produced -----------------------------------
  var allocation = autoAllocate(RULES, weeks);
  var summary = summarizeAllocation(allocation, weeks, RULES);
  var occupancy = weekOccupancy(allocation.employees, weeks);

  var allocHtml =
    '<table class="summary-table">' +
    row("Weeks handed out", summary.totalAssigned + " of " + summary.capacity + " available") +
    row("Busiest week", summary.busiestWeek + " people out (cap is " +
        RULES.maxConcurrentOnVacation + ")") +
    row("Senior tier average", summary.seniorAverageWeeks.toFixed(1) + " weeks (" +
        summary.seniorAverageSummer.toFixed(1) + " of them summer)") +
    row("Everyone else average", summary.otherAverageWeeks.toFixed(1) + " weeks (" +
        summary.otherAverageSummer.toFixed(1) + " of them summer)") +
    row("Rule errors", summary.errors) +
    row("Warnings", summary.warnings) +
    row("Could not be placed", summary.unresolved) +
    "</table>";

  if (allocation.unresolved.length > 0) {
    allocHtml += '<ul class="check-list">' + allocation.unresolved.map(function (u) {
      return '<li class="check-fail">' + u.name + " got " + u.got + " of " +
             u.needed + " weeks — " + u.reason + "</li>";
    }).join("") + "</ul>";
  }

  allocHtml += '<table class="week-table"><thead><tr><th>#</th><th>Employee</th>' +
               "<th>Tier</th><th>Weeks</th><th>Summer</th><th>Lottery</th></tr></thead><tbody>";

  allocation.employees.forEach(function (e) {
    var lotterySet = {};
    weeks.forEach(function (w) { if (w.isExcludedFromSeniority) lotterySet[w.weekNumber] = true; });
    var lotteryCount = e.assignedWeeks.filter(function (a) { return lotterySet[a.week]; }).length;

    allocHtml += "<tr" + (e.isSeniorTier ? ' class="row-senior"' : "") + ">" +
      "<td>" + e.seniorityRank + "</td>" +
      "<td>" + e.name + "</td>" +
      "<td>" + (e.isSeniorTier ? "Senior" : "Staff") + "</td>" +
      "<td>" + e.assignedWeeks.length + "</td>" +
      "<td>" + summerWeekCountFor(e, weeks) + "</td>" +
      "<td>" + lotteryCount + "</td>" +
      "</tr>";
  });

  allocHtml += "</tbody></table>";
  document.getElementById("allocation-preview").innerHTML = allocHtml;

  // ---- The 52-week table --------------------------------------------------
  var html = "<thead><tr><th>Week</th><th>Dates</th><th>Type</th><th>Notes</th>" +
             "<th>People out</th></tr></thead><tbody>";

  weeks.forEach(function (w) {
    var type = "";
    var rowClass = "";
    if (w.isExcludedFromSeniority) {
      type = "Lottery";
      rowClass = "row-lottery";
    } else if (w.isSummer) {
      type = "Summer";
      rowClass = "row-summer";
    } else {
      type = "Normal";
    }

    html += '<tr class="' + rowClass + '">' +
            "<td>" + w.weekNumber + "</td>" +
            "<td>" + formatDateLong(w.startDate) + " – " + formatDateLong(w.endDate) + "</td>" +
            "<td>" + type + "</td>" +
            "<td>" + w.holidays.join(", ") + "</td>" +
            "<td>" + occupancy[w.weekNumber].length + " / " +
            RULES.maxConcurrentOnVacation + "</td>" +
            "</tr>";
  });

  html += "</tbody>";
  document.getElementById("week-table").innerHTML = html;
})();
