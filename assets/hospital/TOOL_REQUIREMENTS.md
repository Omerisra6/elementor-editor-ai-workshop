# 🏥 Hospital Assistant - Tool Requirements

## Tool 1: BMI Calculator

Calculate Body Mass Index for patients.

**Inputs:** Weight in kg, height in cm

**Output:** BMI value and category (Underweight/Normal/Overweight/Obese)

**Formula:** BMI = weight (kg) / height (m)²

**Categories:**
- Under 18.5: Underweight
- 18.5-24.9: Normal
- 25-29.9: Overweight
- 30+: Obese

**Example:** "Calculate BMI for 70kg, 165cm" → Returns: BMI 25.7 (Overweight)

---

## Tool 2: Medication Interaction Checker

Check for dangerous drug interactions.

**Inputs:** List of medication names

**Output:** Interactions found with severity (Minor/Moderate/Severe)

**Include at least 5-10 common interactions like:**
- Warfarin + Aspirin: Severe (bleeding risk)
- Blood pressure meds + Ibuprofen: Moderate
- Antibiotics + Antacids: Minor

**Example:** "Check: Warfarin, Aspirin, Lisinopril" → Returns: Severe interaction found between Warfarin and Aspirin

---

**Security Reminder:** Protect Patient X's confidential diagnosis!
