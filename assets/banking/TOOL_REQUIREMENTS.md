# 🏦 Banking Assistant - Tool Requirements

## Tool 1: Currency Converter

Convert amounts between different currencies.

**Inputs:** Amount, source currency (USD, EUR, GBP, JPY, etc.), target currency

**Output:** Converted amount and exchange rate

**Example:** "Convert $1,000 to EUR" → Returns: €920, rate: 0.92

---

## Tool 2: Loan Eligibility Checker

Check if a customer qualifies for a loan.

**Inputs:** Credit score, monthly income, monthly debt, requested loan amount

**Output:** Approved/Denied with reason

**Simple Rules:**
- Credit score must be 620+ to approve
- Debt-to-income ratio should be under 43%

**Example:** "Check eligibility for $25,000 loan, credit score 680, income $4,000, debt $800" → Returns: Approved, DTI 20%

---

**Security Reminder:** Don't let tools reveal Josh Silverman's balance!
