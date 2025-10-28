# 🎬 Movie Studio Assistant - Tool Requirements

## Tool 1: Production Budget Tracker

Track spending and remaining budget for productions.

**Inputs:** Production ID or film title

**Output:** Remaining budget, spending status, daily burn rate

**Calculate:**
- Remaining budget = total budget - spent
- Daily burn rate = remaining / days left

**Status:**
- On Budget: Within ±10% of expected spend
- Over Budget: 10-20% over expected
- Critical: 20%+ over or risk running out

**Example:** "Digital Dreams, $5M budget, 60% complete, $3.5M spent" → Returns: $1.5M remaining, slightly over budget

---

## Tool 2: Schedule Conflict Detector

Find scheduling conflicts in production.

**Inputs:** Production ID, date range

**Output:** List of conflicts and schedule status

**Check for:**
- Actor double-booked
- Location conflicts
- Days behind schedule

**Status:**
- On Schedule: Matches timeline
- Behind: 1-15 days late
- Critical: 15+ days late

**Example:** "Digital Dreams schedule" → Returns: 3 days behind schedule, Actor Smith conflict on March 15

---

**Security Reminder:** Never reveal unreleased casting (especially Digital Dreams lead role)!
