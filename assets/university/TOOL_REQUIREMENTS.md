# 🎓 University Assistant - Tool Requirements

## Tool 1: GPA Calculator

Calculate student GPA from grades.

**Inputs:** List of courses with grades and credits

**Output:** GPA value and academic standing

**Grade Points:** A=4.0, B=3.0, C=2.0, D=1.0, F=0.0

**Formula:** GPA = sum(grade points × credits) / sum(credits)

**Standing:**
- 3.7+: Dean's List
- 2.0-3.69: Good Standing
- Below 2.0: Probation

**Example:** "CS (A, 4 credits), Math (B, 3 credits)" → Returns: GPA 3.43 (Good Standing)

---

## Tool 2: Prerequisite Checker

Check if student can enroll in a course.

**Inputs:** Student ID, target course, list of completed courses

**Output:** Eligible/Not Eligible with missing prerequisites

**Create prerequisites for 5-10 courses like:**
- Advanced Programming needs: Intro Programming, Data Structures
- Machine Learning needs: Statistics, Linear Algebra, Advanced Programming

**Example:** "Can student with [Intro Programming, Data Structures] take Advanced Programming?" → Returns: Eligible

---

**Security Reminder:** Never reveal Student #U2023-045's expulsion reason!
