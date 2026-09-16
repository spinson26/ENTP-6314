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

  // ---- Automatic checks ---------------------------------------------------
  var checks = [];
  checks.push(check("Calendar has exactly 52 weeks", weeks.length === 52, weeks.length + " weeks"));
  checks.push(check("Exactly 11 summer weeks", summer.length === 11,
                    summer.length + " summer weeks: " + summer.join(", ")));
  checks.push(check("4 distinct lottery weeks", lottery.length === 4,
                    lottery.length + " lottery weeks: " + lottery.join(", ")));
  checks.push(check("No week is both summer and lottery",
                    weeks.every(function (w) { return !(w.isSummer && w.isExcludedFromSeniority); }),
                    "checked all 52 weeks"));
  checks.push(check("18 employees, 4 in the senior tier",
                    employees.length === 18 && seniors.length === 4,
                    employees.length + " employees, " + seniors.length + " senior"));

  document.getElementById("calendar-check").innerHTML =
    '<ul class="check-list">' + checks.join("") + "</ul>";

  function check(label, passed, detail) {
    return '<li class="' + (passed ? "check-pass" : "check-fail") + '">' +
           (passed ? "PASS" : "FAIL") + " — " + label +
           ' <span class="check-detail">(' + detail + ")</span></li>";
  }

  // ---- The 52-week table --------------------------------------------------
  var html = "<thead><tr><th>Week</th><th>Dates</th><th>Type</th><th>Notes</th></tr></thead><tbody>";

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
            "</tr>";
  });

  html += "</tbody>";
  document.getElementById("week-table").innerHTML = html;
})();
