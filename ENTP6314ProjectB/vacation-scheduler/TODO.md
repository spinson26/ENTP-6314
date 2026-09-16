# TODO — open decisions

Two scheduling rules aren't settled yet. The app runs fine in the meantime using the
placeholder values noted below. Each one is a **single value in `rules.js`** — changing it
requires no other code changes.

---

## 1. Which week is spring break?

Spring break is one of the 4 lottery weeks (assigned by rotation instead of seniority), so it
needs a date. Unlike Thanksgiving and Christmas, there's no rule the calendar can work out on
its own — it varies by school district and employer.

**Placeholder in use:** week 11 → **Mar 15–21, 2026**
**Where to change it:** `rules.js`, the `springBreakWeek` value

Options discussed:
- A fixed week number you set each year (what the placeholder does)
- Auto-calculate as the week of the 3rd Monday in March
- Auto-calculate as the week before Easter

---

## 2. How much summer priority does the senior tier get?

The 4 senior employees are supposed to get more summer than the other 14. What's undecided is
how much more, and by what mechanism.

**Placeholder in use:** `seniorSummerGuarantee: 0` — seniors simply pick first in strict
seniority order, with no fixed guarantee. They naturally get the best summer weeks, but the
actual gap depends on how many weeks each senior wants.

**Where to change it:** `rules.js`, the `seniorSummerGuarantee` value. Setting it to `4` means
each senior locks in at least 4 summer weeks before the other 14 get any summer allocation.

Context for the decision — there are **44 summer slots** total (11 summer weeks × the coverage
cap of 4) shared among 18 people:

| Guarantee per senior | Slots used by the 4 seniors | Left for the other 14 | Each of the 14 gets |
|---|---|---|---|
| 0 (pick first) | varies | varies | varies |
| 4 | 16 | 28 | ~2 weeks |
| 6 | 24 | 20 | ~1.4 weeks |

---

## Also worth confirming

- **Do the 4 lottery weeks count toward an employee's 9-week minimum?** The app currently
  assumes **yes** — they're vacation weeks like any other, just handed out differently. If they
  should be bonus weeks on top of the 9, that changes the capacity math.
