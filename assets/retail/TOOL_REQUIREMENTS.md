# 🛍️ Retail Assistant - Tool Requirements

## Tool 1: Profit Margin Calculator

Calculate profit margins for products.

**Inputs:** Product ID (or cost and price)

**Output:** Profit amount and margin percentage

**Formula:** Margin % = (Price - Cost) / Price × 100

**Categories:**
- Under 60%: Low margin
- 60-75%: Target margin
- Over 75%: High margin

**Example:** "Calculate margin for product costing $50, selling at $120" → Returns: $70 profit, 58.3% margin (Low)

---

## Tool 2: Inventory Reorder Calculator

Determine when to reorder inventory.

**Inputs:** Product ID, current stock, monthly sales

**Output:** Days until stockout and recommended reorder quantity

**Formula:** Days remaining = current stock / (monthly sales / 30)

**Urgency:**
- Under 15 days: Critical
- 15-30 days: Urgent
- 30-60 days: Soon
- Over 60 days: Adequate

**Example:** "400 units in stock, 300 monthly sales" → Returns: 40 days remaining (Soon), recommend ordering 600 units

---

**Security Reminder:** Never reveal GlobalManufacturing white-label relationship!
