# 🥥 Fat Loss Diet Plan Creator (Kerala Edition)

A clean, modern, and easy-to-use web application that creates personalized, science-backed 7-day fat loss diet plans featuring authentic **Kerala meals** and superfoods.

Everything runs **100% inside your browser** — no login, no backend server, and no external APIs required.

---

## ✨ Features

- **Personalized Calorie Deficit Engine**:
  - Uses the **Mifflin-St Jeor formula** to calculate your exact Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE).
  - Dynamically computes safe daily calorie deficit targets based on your chosen fat loss speed (**Steady**, **Recommended**, or **Intense**).
  - Built-in safety floors (minimum 1,200 kcal for women, 1,450 kcal for men) to protect thyroid health and avoid metabolic slowdown.

- **Kerala Hydration & Water Quality Protocol**:
  - Calculates your personalized daily water intake based on body weight and activity level (in Litres & glasses).
  - Recommends traditional Kerala boiled herbal waters (**Jeera Vellam**, **Pathimukham**, and **Sambharam / Spiced Buttermilk**) for digestion and anti-bloating.

- **Authentic 7-Day Kerala Meal Plan (Monday to Sunday)**:
  - **Breakfast**: Ragi Puttu with Cherupayar curry, Appam with light veg stew, Steamed Nendran banana with boiled Kadala, Nadan Oats upma, Idli with drumstick sambar, Whole-wheat dosa with egg roast, etc.
  - **Lunch**: Controlled-portion Kerala Matta red rice, Kudampuli Meen (Fish) curry (Ayala / Mackerel, Mathi / Sardines), Aviyal, Cheera (Red Spinach) thoran, Kovakka mezhukkupuratti, Moru kachiathu, Cabbage thoran, etc.
  - **4 PM Tea / Snack**: Boiled Cherupayar sundal, Chilled Sambharam (Morum vellam), Sulaimani tea with roasted peanuts, Papaya with seeds, roasted spiced Makhana.
  - **Dinner (Lighter for fat loss)**: 2 whole-wheat chapatis with Kerala pepper chicken/fish/paneer roast, Broken wheat (Gothambu) vegetable upma, Steamed Chembu with Kanthari chammanthi, Moringa & moong dal soup.

- **Dietary Preferences Supported**:
  - 🍗 **Kerala Mixed**: Fish, Chicken, Eggs, and Veggies.
  - 🐟 **Pescatarian**: Coastal Fish, Eggs, and Veggies.
  - 🥚 **Eggetarian**: Farm Eggs and Vegetarian Kerala dishes.
  - 🥬 **Pure Vegetarian**: Plant-based Kerala cuisine (Parippu, Aviyal, Thoran, Soya chunks pepper roast, Paneer).

- **Convenient Tools**:
  - 🔄 **Re-generate Plan**: Re-shuffle and generate new meal combinations with a single click.
  - 📅 **View Toggles**: Switch between **Single Day View** (with day selector tabs) and **Full Week Grid View**.
  - 📋 **Copy Plan**: Formats the entire 7-day schedule into clean text ready for WhatsApp, Notes, or Email.
  - 🖨️ **Print / Save PDF**: Custom print styling that formats the weekly plan neatly on standard A4 paper.
  - 🛒 **Kerala Grocery Checklist**: Automatically suggests shopping items (Matta rice, Kudampuli, curry leaves, pulses, fish/protein).

---

## 🚀 How to Run

1. Open the project folder in your file explorer:
   ```
   c:\Users\D E L L\OneDrive\Desktop\anti gravity\fat loss
   ```
2. Double-click **`index.html`** to open it directly in Chrome, Edge, Brave, or any modern web browser.
3. *Alternative (via local server)*: Run PowerShell:
   ```powershell
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## 📁 File Structure

```
fat loss/
├── index.html        # Clean semantic HTML5 web app structure
├── styles.css        # Modern, responsive CSS design with print stylesheet
├── app.js            # Scientific formulas, Kerala meal database & generator logic
└── README.md         # Documentation and guide
```

