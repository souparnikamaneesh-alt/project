/**
 * Kerala Fat Loss Diet Plan Creator
 * 100% In-Browser Pure JavaScript Application
 */

// ============================================================================
// 1. KERALA MEALS DATABASE (Curated for Fat Loss)
// ============================================================================

const MEAL_DATABASE = {
  breakfasts: [
    {
      id: "b1",
      title: "Ragi Puttu with Cherupayar Curry",
      calories: 330,
      protein: 11,
      carbs: 58,
      fat: 6,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Steamed finger millet (ragi) puttu (1 cup) with spiced green gram curry and a hint of fresh grated coconut (1 tsp). High in fiber and slow-release energy.",
      superfood: "Ragi (Finger Millet) & Green Gram"
    },
    {
      id: "b2",
      title: "Soft Appam with Aromatic Vegetable Stew",
      calories: 310,
      protein: 7,
      carbs: 54,
      fat: 7,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "2 soft fermented rice appams served with a light vegetable stew (carrots, green peas, beans) simmered in thin coconut milk flavored with cardamom, clove, and curry leaves.",
      superfood: "Fermented Batter for Gut Health"
    },
    {
      id: "b3",
      title: "Nadan Oats Upma & Boiled Egg Whites",
      calories: 290,
      protein: 16,
      carbs: 42,
      fat: 5,
      tags: ["eggetarian", "pescatarian", "nonveg"],
      desc: "Rolled oats tempered Kerala style with mustard, ginger, green chillies, curry leaves, and diced veggies; served with 2 hard-boiled egg whites for high-quality protein.",
      superfood: "Beta-Glucan Fiber + Pure Albumin"
    },
    {
      id: "b4",
      title: "Steamed Idli with Sambar & Thakkali Chammanthi",
      calories: 320,
      protein: 10,
      carbs: 58,
      fat: 5,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "3 steamed idlis served with vegetable-packed drumstick sambar and roasted shallot-tomato chammanthi. Zero added oil, purely steamed.",
      superfood: "Moringa (Drumstick) Leaves/Pods"
    },
    {
      id: "b5",
      title: "Whole Wheat Dosa with Kerala Egg Roast",
      calories: 340,
      protein: 15,
      carbs: 46,
      fat: 9,
      tags: ["eggetarian", "pescatarian", "nonveg"],
      desc: "2 thin whole-wheat (godhumai) dosas with 1 whole boiled egg sauteed in shallots, ginger, tomato, and black pepper gravy (1 tsp cold-pressed coconut oil).",
      superfood: "Black Pepper & Cheriya Ulli"
    },
    {
      id: "b6",
      title: "Steamed Nendran Plantain with Boiled Kadala",
      calories: 320,
      protein: 9,
      carbs: 62,
      fat: 4,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "1 medium ripe Nendran banana steamed in its skin, served with 1/2 cup lightly salted, boiled black chickpeas (kadala). Traditional Malabar energy breakfast.",
      superfood: "Prebiotic Resistant Starch"
    },
    {
      id: "b7",
      title: "Puttu with Spicy Black Kadala Curry",
      calories: 350,
      protein: 12,
      carbs: 60,
      fat: 6,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Kerala wheat or red rice puttu with robust black chickpea curry flavored with roasted coriander, cumin, and curry leaves. Rich in iron and plant protein.",
      superfood: "Kadala (Iron & Fiber)"
    },
    {
      id: "b8",
      title: "Oats Upma with Paneer Cubes & Curry Leaves",
      calories: 310,
      protein: 14,
      carbs: 40,
      fat: 9,
      tags: ["veg"],
      desc: "Savory oats cooked with diced carrots, beans, peas, and 40g fresh paneer cubes tossed in Kerala spices with ginger and green chillies.",
      superfood: "Plant Fiber + Dairy Protein"
    },
    {
      id: "b9",
      title: "Red Spinach (Cheera) Wheat Dosa & Parippu Chutney",
      calories: 300,
      protein: 11,
      carbs: 52,
      fat: 5,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "2 crispy whole wheat dosas infused with fresh red spinach puree, served with roasted chana dal and mint chammanthi.",
      superfood: "Cheera (Red Spinach Iron)"
    }
  ],

  lunches: [
    {
      id: "l1",
      title: "Matta Rice with Ayala (Mackerel) Curry & Cabbage Thoran",
      calories: 480,
      protein: 34,
      carbs: 62,
      fat: 10,
      tags: ["pescatarian", "nonveg"],
      desc: "1 cup cooked Kerala Matta red rice, 1 piece fresh Ayala (Mackerel) cooked in spicy Kudampuli fish curry, 1 cup cabbage-carrot thoran, and fresh spiced buttermilk (moru).",
      superfood: "Ayala (Omega-3) & Kudampuli (HCA)"
    },
    {
      id: "l2",
      title: "Matta Rice with Mathi (Sardines) Fry & Padavalanga Thoran",
      calories: 460,
      protein: 32,
      carbs: 60,
      fat: 9,
      tags: ["pescatarian", "nonveg"],
      desc: "1 cup red Matta rice with 2 small sardines (mathi) shallow tawa fried with turmeric and lemon, snake gourd (padavalanga) thoran, and hot tomato-pepper rasam.",
      superfood: "Mathi (Calcium & Vitamin D)"
    },
    {
      id: "l3",
      title: "Matta Rice with Kerala Nadan Chicken Curry & Kovakka Thoran",
      calories: 490,
      protein: 36,
      carbs: 58,
      fat: 11,
      tags: ["nonveg"],
      desc: "1 cup Matta rice, 130g lean chicken breast stewed in onion-tomato-coriander gravy, ivy gourd (kovakka) mezhukkupuratti with minimal oil, and cucumber salad.",
      superfood: "Lean Poultry & Kovakka (Blood Sugar Balance)"
    },
    {
      id: "l4",
      title: "Traditional Kerala Aviyal with Matta Rice & Cherupayar Parippu",
      calories: 440,
      protein: 16,
      carbs: 68,
      fat: 10,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Generous bowl of traditional Kerala Aviyal (drumstick, ash gourd, raw banana, beans cooked in curd & light coconut), 1 cup Matta rice, moong dal parippu, and moru.",
      superfood: "7-Vegetable Aviyal Spectrum"
    },
    {
      id: "l5",
      title: "Matta Rice with Soya Chunks Pepper Roast & Beetroot Thoran",
      calories: 430,
      protein: 25,
      carbs: 64,
      fat: 8,
      tags: ["veg", "eggetarian"],
      desc: "1 cup Matta rice, high-protein soya chunks stir-fried with shallots, crushed Malabar pepper, antioxidant beetroot thoran, and spiced moru kachiathu.",
      superfood: "Beetroot Nitrates & Soya Protein"
    },
    {
      id: "l6",
      title: "Matta Rice with Double Egg Roast & Cheera Thoran",
      calories: 460,
      protein: 22,
      carbs: 60,
      fat: 12,
      tags: ["eggetarian", "pescatarian", "nonveg"],
      desc: "1 cup cooked Matta rice, 2 boiled eggs simmered in onion-tomato pepper roast, iron-rich red spinach (cheera) thoran, and digestive rasam.",
      superfood: "Choline & Iron"
    },
    {
      id: "l7",
      title: "Matta Rice with Tilapia Fish Curry & Beans Thoran",
      calories: 450,
      protein: 31,
      carbs: 60,
      fat: 8,
      tags: ["pescatarian", "nonveg"],
      desc: "1 cup Matta rice, fresh river Tilapia cooked in roasted fenugreek-chilli-Kudampuli gravy, French green beans thoran, and fresh cucumber slices.",
      superfood: "Low-fat White Fish Protein"
    },
    {
      id: "l8",
      title: "Quinoa or Matta Rice with Paneer Pepper Roast & Dal",
      calories: 470,
      protein: 21,
      carbs: 58,
      fat: 14,
      tags: ["veg"],
      desc: "1 cup Matta rice or Kerala broken wheat, 60g grilled paneer tossed with capsicum, shallots, and crushed black pepper, yellow dal, and cabbage thoran.",
      superfood: "Curcumin & Capsaicin"
    }
  ],

  snacks: [
    {
      id: "s1",
      title: "Boiled Cherupayar (Green Gram) with Grated Coconut",
      calories: 140,
      protein: 7,
      carbs: 22,
      fat: 2,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "1/2 cup boiled green gram tossed with mustard seeds, curry leaves, and 1/2 tsp fresh grated coconut. High satiety index to prevent evening bingeing.",
      superfood: "Green Gram Satiety Fiber"
    },
    {
      id: "s2",
      title: "Chilled Sambharam (Kerala Spiced Buttermilk)",
      calories: 60,
      protein: 3,
      carbs: 5,
      fat: 2,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "1 large glass of churned curd diluted with water, infused with crushed ginger, shallots, green chillies, curry leaves, and Himalayan pink salt. Naturally cooling.",
      superfood: "Active Probiotics"
    },
    {
      id: "s3",
      title: "Sulaimani Tea & Handful of Roasted Peanuts",
      calories: 150,
      protein: 6,
      carbs: 12,
      fat: 9,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Traditional Malabar spiced black tea brewed with cardamom, clove, and lemon juice (no refined sugar) accompanied by 20g dry roasted peanuts.",
      superfood: "Cardamom & Polyphenols"
    },
    {
      id: "s4",
      title: "Boiled Kadala (Black Chickpea) Sundal",
      calories: 150,
      protein: 7,
      carbs: 24,
      fat: 3,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "1/2 cup tender boiled black chickpeas tempered with ginger, mustard seeds, and pinch of hing (asafoetida) for smooth digestion.",
      superfood: "Digestive Spices & Complex Carbs"
    },
    {
      id: "s5",
      title: "Fresh Papaya Slices with Chia / Pumpkin Seeds",
      calories: 110,
      protein: 3,
      carbs: 20,
      fat: 2,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "1 medium bowl of ripe Kerala papaya cubes sprinkled with 1 tsp roasted pumpkin or chia seeds. Rich in papain enzyme for protein digestion.",
      superfood: "Papain Enzyme"
    },
    {
      id: "s6",
      title: "Spiced Roasted Makhana (Foxnuts)",
      calories: 120,
      protein: 3,
      carbs: 20,
      fat: 3,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "A cup of light crunchy makhana roasted in 1/2 tsp coconut oil with turmeric, black pepper, and rock salt. Perfect crunchy tea companion.",
      superfood: "Low-Sodium Mineral Crunch"
    }
  ],

  dinners: [
    {
      id: "d1",
      title: "2 Whole Wheat Pathiris / Chapatis with Kerala Chicken Pepper Roast",
      calories: 380,
      protein: 30,
      carbs: 42,
      fat: 8,
      tags: ["nonveg"],
      desc: "2 soft whole wheat chapatis served with 120g skinless chicken cooked dry with shallots, crushed black pepper, fennel seeds, and a large cucumber-onion salad.",
      superfood: "Thermogenic Black Pepper"
    },
    {
      id: "d2",
      title: "2 Whole Wheat Chapatis with Grilled Fish & Cabbage Salad",
      calories: 360,
      protein: 28,
      carbs: 40,
      fat: 7,
      tags: ["pescatarian", "nonveg"],
      desc: "2 chapatis served with 100g tawa-grilled fish marinated in ginger-garlic-turmeric paste, paired with shredded cabbage and lime salad.",
      superfood: "Lean Anti-Inflammatory Protein"
    },
    {
      id: "d3",
      title: "Broken Wheat (Gothambu) Vegetable Upma & Curd",
      calories: 330,
      protein: 11,
      carbs: 54,
      fat: 6,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Light savory roasted cracked wheat porridge cooked with diced beans, carrots, ginger, and mustard seeds; served with 1/2 cup fresh homemade curd.",
      superfood: "Whole Wheat Kernel Fiber"
    },
    {
      id: "d4",
      title: "Steamed Chembu (Taro) with Kanthari Chammanthi & Boiled Eggs",
      calories: 340,
      protein: 16,
      carbs: 46,
      fat: 7,
      tags: ["eggetarian", "pescatarian", "nonveg"],
      desc: "Rustic steamed colocasia (chembu) or sweet potato paired with bird's eye chilli (kanthari mulaku) and shallot dip, plus 2 boiled egg whites.",
      superfood: "Kanthari (Metabolism Booster)"
    },
    {
      id: "d5",
      title: "Light Vegetable Stew with 2 Whole Wheat Chapatis",
      calories: 320,
      protein: 8,
      carbs: 52,
      fat: 7,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "2 phulkas/chapatis with a soothing mild stew of potatoes, carrots, cauliflower, and green peas infused with crushed ginger and cinnamon in light coconut milk.",
      superfood: "Cinnamon for Insulin Sensitivity"
    },
    {
      id: "d6",
      title: "Paneer / Tofu Pepper Roast with 2 Chapatis",
      calories: 370,
      protein: 18,
      carbs: 44,
      fat: 12,
      tags: ["veg"],
      desc: "70g fresh paneer or firm tofu sautéed with shallots, bell peppers, curry leaves, and freshly ground Malabar black pepper, served with 2 dry rotis.",
      superfood: "Casein Protein & Piperine"
    },
    {
      id: "d7",
      title: "Nourishing Moringa & Green Moong Dal Soup with 1 Chapati",
      calories: 310,
      protein: 14,
      carbs: 48,
      fat: 5,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Warm wholesome soup of fresh Moringa (drumstick) leaves, yellow moong dal, crushed garlic, and cumin, served alongside 1 chapati and sliced radish.",
      superfood: "Moringa Chlorophyll & Garlic Allicin"
    },
    {
      id: "d8",
      title: "2 Chapatis with Kerala Mushroom & Green Pea Roast",
      calories: 330,
      protein: 11,
      carbs: 52,
      fat: 6,
      tags: ["veg", "eggetarian", "pescatarian", "nonveg"],
      desc: "Button mushrooms and green peas cooked in a fragrant Kerala onion-tomato roast flavored with fennel, ginger, and curry leaves; paired with 2 whole wheat rotis.",
      superfood: "Selenium & Beta-Glucans"
    }
  ]
};

// Grocery List Items grouped by category
const GROCERY_CATALOG = {
  staples: [
    "Kerala Matta Rice (Red rice / Palakkadan Matta)",
    "Ragi flour (Finger millet) & Whole Wheat flour (Atta)",
    "Rolled Oats & Broken Wheat (Gothambu)",
    "Black Chickpeas (Kadala) & Green Gram (Cherupayar)",
    "Yellow Moong Dal (Cherupayar parippu)"
  ],
  spices: [
    "Kudampuli (Malabar tamarind - essential for fish curries)",
    "Fresh Curry Leaves & Coriander leaves",
    "Shallots (Cheriya Ulli / Sambar onions)",
    "Whole Black Peppercorns & Green Chillies (Kanthari)",
    "Ginger, Garlic, Mustard seeds, Jeera (Cumin seeds)",
    "Pathimukham wood shavings (for herbal boiled water)"
  ],
  veggies: [
    "Red Spinach (Cheera) or Green Amaranth",
    "Drumsticks (Muringakka) & Ash Gourd (Kumbalanga)",
    "Snake Gourd (Padavalanga) & Ivy Gourd (Kovakka)",
    "Cabbage, Carrots, French Beans, Beetroot",
    "Ripe Nendran Plantains & Fresh Papaya",
    "Cucumbers, Tomatoes, and Lemons"
  ],
  protein_nonveg: [
    "Fresh Ayala (Mackerel) or Mathi (Sardines) - 3 to 4 portions",
    "Skinless Chicken Breast (500g - 750g)",
    "Farm Fresh Eggs (1 to 2 dozen)",
    "Low-fat homemade Curd / Yogurt for Buttermilk"
  ],
  protein_pescatarian: [
    "Fresh Ayala (Mackerel) & Mathi (Sardines)",
    "Pearl spot (Karimeen) or fresh Tilapia",
    "Farm Fresh Eggs (1 to 2 dozen)",
    "Low-fat homemade Curd / Yogurt for Buttermilk"
  ],
  protein_eggetarian: [
    "Farm Fresh Eggs (2 to 3 dozen)",
    "Fresh Cottage Cheese (Paneer) or Tofu (300g)",
    "Extra Green Gram (Cherupayar) and Kadala",
    "Low-fat homemade Curd / Yogurt for Buttermilk"
  ],
  protein_veg: [
    "Fresh Low-fat Cottage Cheese (Paneer) - 400g",
    "Nutri-soya chunks / Granules",
    "Extra Green Gram (Cherupayar), Black Kadala & Moong Dal",
    "Low-fat Curd / Yogurt for Sambharam & Moru"
  ]
};

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// ============================================================================
// 2. STATE MANAGEMENT
// ============================================================================

let currentPlan = null;
let activeDayIndex = 0;
let currentViewMode = "single"; // "single" or "all"

// ============================================================================
// 3. SCIENTIFIC CALORIE & WATER CALCULATIONS
// ============================================================================

/**
 * Calculates BMR using Mifflin-St Jeor formula
 */
function calculateBMR(gender, weightKg, heightCm, age) {
  if (gender === "male") {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5);
  } else {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);
  }
}

/**
 * Calculates TDEE based on physical activity level multiplier
 */
function calculateTDEE(bmr, activityLevel) {
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725
  };
  const factor = multipliers[activityLevel] || 1.375;
  return Math.round(bmr * factor);
}

/**
 * Calculates calorie deficit and safe target calorie intake
 */
function calculateCalorieTarget(tdee, goalSpeed, gender) {
  const deficits = {
    steady: 300,
    moderate: 500,
    fast: 750
  };
  const deficit = deficits[goalSpeed] || 500;
  let target = tdee - deficit;

  // Safe biological floor to protect thyroid & metabolic rate
  const safeFloor = gender === "male" ? 1450 : 1200;
  if (target < safeFloor) {
    target = safeFloor;
  }

  return {
    targetCalories: target,
    deficit: tdee - target,
    tdee: tdee
  };
}

/**
 * Calculates daily water intake in Litres and glasses
 */
function calculateWaterIntake(weightKg, activityLevel) {
  // Baseline ~35ml per kg body weight
  let litres = weightKg * 0.035;

  if (activityLevel === "moderate") litres += 0.4;
  if (activityLevel === "very") litres += 0.8;

  // Clamp within reasonable hydration bounds (2.2L to 4.5L)
  litres = Math.max(2.2, Math.min(4.5, litres));
  const roundedL = Math.round(litres * 10) / 10;
  const glasses = Math.round((roundedL * 1000) / 250);

  return {
    litres: roundedL,
    glasses: glasses
  };
}

/**
 * Calculates BMI & Classification
 */
function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = Math.round((weightKg / (heightM * heightM)) * 10) / 10;

  let category = "Normal";
  let badgeColor = "#059669";

  if (bmi < 18.5) {
    category = "Underweight";
    badgeColor = "#0284c7";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    badgeColor = "#d97706";
  } else if (bmi >= 30) {
    category = "Obese";
    badgeColor = "#dc2626";
  }

  return { bmi, category, badgeColor };
}

/**
 * Computes macronutrient targets in grams based on Kerala balanced fat loss split:
 * ~25-30% Protein, ~45-50% Carbs, ~25-30% Healthy Fats
 */
function calculateMacros(targetCalories) {
  const proteinCals = targetCalories * 0.28;
  const carbsCals = targetCalories * 0.46;
  const fatCals = targetCalories * 0.26;

  return {
    proteinGrams: Math.round(proteinCals / 4),
    carbsGrams: Math.round(carbsCals / 4),
    fatGrams: Math.round(fatCals / 9)
  };
}

// ============================================================================
// 4. MEAL PLAN GENERATION ENGINE
// ============================================================================

/**
 * Filters items matching user preference (veg, eggetarian, pescatarian, nonveg)
 */
function filterMealsByPreference(mealList, userPreference) {
  return mealList.filter(meal => meal.tags.includes(userPreference));
}

/**
 * Shuffles an array with Fisher-Yates
 */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates the complete 7-day plan
 */
function generateWeekPlan(userData) {
  const { gender, age, weight, height, activityLevel, foodPreference, goalSpeed } = userData;

  const bmr = calculateBMR(gender, weight, height, age);
  const tdee = calculateTDEE(bmr, activityLevel);
  const { targetCalories, deficit } = calculateCalorieTarget(tdee, goalSpeed, gender);
  const water = calculateWaterIntake(weight, activityLevel);
  const bmiInfo = calculateBMI(weight, height);
  const macros = calculateMacros(targetCalories);

  // Filter meals for this dietary preference
  const breakfasts = filterMealsByPreference(MEAL_DATABASE.breakfasts, foodPreference);
  const lunches = filterMealsByPreference(MEAL_DATABASE.lunches, foodPreference);
  const snacks = filterMealsByPreference(MEAL_DATABASE.snacks, foodPreference);
  const dinners = filterMealsByPreference(MEAL_DATABASE.dinners, foodPreference);

  // Ensure fallback in case a list is small
  const safeBreakfasts = breakfasts.length ? breakfasts : MEAL_DATABASE.breakfasts;
  const safeLunches = lunches.length ? lunches : MEAL_DATABASE.lunches;
  const safeSnacks = snacks.length ? snacks : MEAL_DATABASE.snacks;
  const safeDinners = dinners.length ? dinners : MEAL_DATABASE.dinners;

  // Build 7 non-monotonous days
  const days = [];
  let shuffledB = shuffle(safeBreakfasts);
  let shuffledL = shuffle(safeLunches);
  let shuffledS = shuffle(safeSnacks);
  let shuffledD = shuffle(safeDinners);

  for (let i = 0; i < 7; i++) {
    const bMeal = shuffledB[i % shuffledB.length];
    const lMeal = shuffledL[i % shuffledL.length];
    const sMeal = shuffledS[i % shuffledS.length];
    const dMeal = shuffledD[i % shuffledD.length];

    const dayTotalCalories = bMeal.calories + lMeal.calories + sMeal.calories + dMeal.calories;
    const dayTotalProtein = bMeal.protein + lMeal.protein + sMeal.protein + dMeal.protein;
    const dayTotalCarbs = bMeal.carbs + lMeal.carbs + sMeal.carbs + dMeal.carbs;
    const dayTotalFat = bMeal.fat + lMeal.fat + sMeal.fat + dMeal.fat;

    days.push({
      dayIndex: i,
      dayName: DAY_NAMES[i],
      breakfast: bMeal,
      lunch: lMeal,
      snack: sMeal,
      dinner: dMeal,
      totals: {
        calories: dayTotalCalories,
        protein: dayTotalProtein,
        carbs: dayTotalCarbs,
        fat: dayTotalFat
      }
    });
  }

  // Estimated monthly loss in kg
  const weeklyLoss = (deficit * 7) / 7700; // 7700 kcal ~= 1 kg fat
  const monthlyLoss = Math.round(weeklyLoss * 4.2 * 10) / 10;

  return {
    user: userData,
    metrics: {
      bmr,
      tdee,
      targetCalories,
      deficit,
      water,
      bmiInfo,
      macros,
      monthlyLoss
    },
    days: days
  };
}

// ============================================================================
// 5. UI RENDERING & DOM INTERACTION
// ============================================================================

const dietForm = document.getElementById("dietForm");
const generateBtn = document.getElementById("generateBtn");
const regenerateBtn = document.getElementById("regenerateBtn");
const copyPlanBtn = document.getElementById("copyPlanBtn");
const printBtn = document.getElementById("printBtn");
const resultsSection = document.getElementById("resultsSection");
const mealsDisplayArea = document.getElementById("mealsDisplayArea");
const dayTabsNav = document.getElementById("dayTabsNav");
const viewDayByDay = document.getElementById("viewDayByDay");
const viewAllDays = document.getElementById("viewAllDays");
const scrollToFormBtn = document.getElementById("scrollToFormBtn");
const bmiQuickHint = document.getElementById("bmiQuickHint");
const groceryToggle = document.getElementById("groceryToggle");
const toggleGroceryBtn = document.getElementById("toggleGroceryBtn");
const groceryContent = document.getElementById("groceryContent");
const groceryListItems = document.getElementById("groceryListItems");

// Inputs for live BMI preview
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

function updateQuickBMI() {
  const w = parseFloat(weightInput.value);
  const h = parseFloat(heightInput.value);
  if (w > 30 && h > 100) {
    const { bmi, category } = calculateBMI(w, h);
    bmiQuickHint.textContent = `Current BMI: ${bmi} (${category})`;
  } else {
    bmiQuickHint.textContent = "BMI: Please enter valid numbers";
  }
}

weightInput.addEventListener("input", updateQuickBMI);
heightInput.addEventListener("input", updateQuickBMI);
updateQuickBMI();

/**
 * Read current form state
 */
function getFormData() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const foodPreference = document.getElementById("foodPreference").value;
  const activityLevel = document.getElementById("activityLevel").value;
  const goalSpeed = document.querySelector('input[name="goalSpeed"]:checked').value;

  return {
    gender,
    age,
    weight,
    height,
    foodPreference,
    activityLevel,
    goalSpeed
  };
}

/**
 * Populates top metrics cards
 */
function renderMetricsDashboard(plan) {
  const { metrics, user } = plan;

  // Calorie Target
  document.getElementById("targetCaloriesVal").textContent = metrics.targetCalories.toLocaleString();
  document.getElementById("calorieBreakdownText").textContent = 
    `TDEE: ${metrics.tdee} kcal • Deficit: -${metrics.deficit} kcal`;
  
  // Progress fill ratio against TDEE
  const fillPct = Math.min(100, Math.round((metrics.targetCalories / metrics.tdee) * 100));
  document.getElementById("calFillBar").style.width = `${fillPct}%`;

  // Water Target
  document.getElementById("waterTargetVal").textContent = metrics.water.litres;
  document.getElementById("waterGlassesText").textContent = 
    `~${metrics.water.glasses} glasses (${metrics.water.litres} Litres total daily)`;

  // Macros
  document.getElementById("macroProteinVal").textContent = `${metrics.macros.proteinGrams}g`;
  document.getElementById("macroCarbsVal").textContent = `${metrics.macros.carbsGrams}g`;
  document.getElementById("macroFatsVal").textContent = `${metrics.macros.fatGrams}g`;

  // Projected Progress & BMI
  document.getElementById("projectedLossVal").textContent = `~${metrics.monthlyLoss}`;
  document.getElementById("bmiStatusText").textContent = 
    `Starting BMI: ${metrics.bmiInfo.bmi} (${metrics.bmiInfo.category})`;

  // Subtitle summary text
  const prefNames = {
    nonveg: "Kerala Mixed (Fish, Chicken, Eggs)",
    pescatarian: "Pescatarian (Coastal Fish & Veg)",
    eggetarian: "Eggetarian (Eggs & Veg)",
    vegetarian: "Pure Kerala Vegetarian"
  };
  document.getElementById("userSummaryText").textContent = 
    `Tailored for ${user.age}y ${user.gender}, ${user.weight}kg • Style: ${prefNames[user.foodPreference]} • Target: ${metrics.targetCalories} kcal/day`;
}

/**
 * Creates HTML for a meal slot card
 */
function createMealSlotCardHTML(typeLabel, typeClass, meal) {
  return `
    <div class="meal-slot-card">
      <div>
        <div class="meal-badge-bar">
          <span class="meal-type-pill ${typeClass}">${typeLabel}</span>
          <span class="meal-calories-tag">${meal.calories} kcal</span>
        </div>
        <h5 class="meal-title">${meal.title}</h5>
        <p class="meal-desc">${meal.desc}</p>
      </div>
      <div class="meal-meta-tags">
        <span class="meta-pill">P: ${meal.protein}g</span>
        <span class="meta-pill">C: ${meal.carbs}g</span>
        <span class="meta-pill">F: ${meal.fat}g</span>
        <span class="meta-pill highlight">⭐ ${meal.superfood}</span>
      </div>
    </div>
  `;
}

/**
 * Renders Single Day View
 */
function renderSingleDayView(dayIndex) {
  if (!currentPlan) return;
  const day = currentPlan.days[dayIndex];

  mealsDisplayArea.className = "meals-area single-view";
  mealsDisplayArea.innerHTML = `
    <div class="single-day-wrapper">
      <div class="day-card-header">
        <h4>
          <span>📅 ${day.dayName}</span>
          <small style="font-size:0.85rem; color:var(--gray-500); font-weight:500;">(Day ${dayIndex + 1} of 7)</small>
        </h4>
        <div class="day-calorie-badge">
          Day Total: ~${day.totals.calories} kcal • P: ${day.totals.protein}g | C: ${day.totals.carbs}g | F: ${day.totals.fat}g
        </div>
      </div>
      
      <div class="meal-slots-grid">
        ${createMealSlotCardHTML("Breakfast", "type-breakfast", day.breakfast)}
        ${createMealSlotCardHTML("Lunch", "type-lunch", day.lunch)}
        ${createMealSlotCardHTML("4 PM Snack", "type-snack", day.snack)}
        ${createMealSlotCardHTML("Dinner", "type-dinner", day.dinner)}
      </div>
    </div>
  `;
}

/**
 * Renders All 7 Days Grid View
 */
function renderAllDaysView() {
  if (!currentPlan) return;
  mealsDisplayArea.className = "meals-area multi-view";

  let html = "";
  currentPlan.days.forEach((day, index) => {
    html += `
      <div class="week-day-block">
        <div class="week-day-title-row">
          <h4>${day.dayName} <span style="font-size:0.85rem; font-weight:normal; color:var(--gray-500);">• Day ${index + 1}</span></h4>
          <span class="day-calorie-badge">Total: ~${day.totals.calories} kcal</span>
        </div>
        <div class="meal-slots-grid">
          ${createMealSlotCardHTML("Breakfast", "type-breakfast", day.breakfast)}
          ${createMealSlotCardHTML("Lunch", "type-lunch", day.lunch)}
          ${createMealSlotCardHTML("Snack (4 PM)", "type-snack", day.snack)}
          ${createMealSlotCardHTML("Dinner", "type-dinner", day.dinner)}
        </div>
      </div>
    `;
  });

  mealsDisplayArea.innerHTML = html;
}

/**
 * Renders the custom grocery list based on user preference
 */
function renderGroceryList(preference) {
  let proteinItems = GROCERY_CATALOG.protein_nonveg;
  if (preference === "pescatarian") proteinItems = GROCERY_CATALOG.protein_pescatarian;
  if (preference === "eggetarian") proteinItems = GROCERY_CATALOG.protein_eggetarian;
  if (preference === "vegetarian") proteinItems = GROCERY_CATALOG.protein_veg;

  groceryListItems.innerHTML = `
    <div class="grocery-category">
      <h5>🌾 Healthy Kerala Carbs</h5>
      <ul>${GROCERY_CATALOG.staples.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
    <div class="grocery-category">
      <h5>🌿 Spices, Tamarind & Herbs</h5>
      <ul>${GROCERY_CATALOG.spices.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
    <div class="grocery-category">
      <h5>🥦 Fresh Produce & Thoran Greens</h5>
      <ul>${GROCERY_CATALOG.veggies.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
    <div class="grocery-category">
      <h5>🐟 High Protein & Dairy</h5>
      <ul>${proteinItems.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `;
}

/**
 * Show Toast Notification
 */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ============================================================================
// 6. EVENT LISTENERS
// ============================================================================

// Form Submission -> Generate Plan
dietForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = getFormData();
  currentPlan = generateWeekPlan(formData);
  activeDayIndex = 0;

  renderMetricsDashboard(currentPlan);
  renderGroceryList(formData.foodPreference);

  // Switch to single day view by default
  currentViewMode = "single";
  viewDayByDay.classList.add("active");
  viewAllDays.classList.remove("active");
  dayTabsNav.style.display = "flex";

  // Reset tab selection to Day 1
  document.querySelectorAll(".day-tab").forEach((tab, idx) => {
    if (idx === 0) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  renderSingleDayView(0);

  // Show Results Section
  resultsSection.classList.remove("hidden");

  // Smooth scroll down to results
  resultsSection.scrollIntoView({ behavior: "smooth" });

  showToast("🌴 Your personalized Kerala 7-day diet plan is ready!");
});

// Regenerate Entire Plan with same or updated form values
regenerateBtn.addEventListener("click", () => {
  const formData = getFormData();
  currentPlan = generateWeekPlan(formData);
  renderMetricsDashboard(currentPlan);
  renderGroceryList(formData.foodPreference);

  if (currentViewMode === "single") {
    renderSingleDayView(activeDayIndex);
  } else {
    renderAllDaysView();
  }

  showToast("🔄 Plan re-shuffled with new fresh Kerala meals!");
});

// Day Tab Click Handling
dayTabsNav.addEventListener("click", (e) => {
  const tab = e.target.closest(".day-tab");
  if (!tab) return;

  const dayIndex = parseInt(tab.getAttribute("data-day"), 10);
  activeDayIndex = dayIndex;

  document.querySelectorAll(".day-tab").forEach(t => {
    t.classList.remove("active");
    t.setAttribute("aria-selected", "false");
  });
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");

  if (currentViewMode !== "single") {
    currentViewMode = "single";
    viewDayByDay.classList.add("active");
    viewAllDays.classList.remove("active");
  }

  renderSingleDayView(dayIndex);
});

// View Toggle: Single Day vs All Days
viewDayByDay.addEventListener("click", () => {
  currentViewMode = "single";
  viewDayByDay.classList.add("active");
  viewAllDays.classList.remove("active");
  dayTabsNav.style.display = "flex";
  renderSingleDayView(activeDayIndex);
});

viewAllDays.addEventListener("click", () => {
  currentViewMode = "all";
  viewAllDays.classList.add("active");
  viewDayByDay.classList.remove("active");
  dayTabsNav.style.display = "none";
  renderAllDaysView();
});

// Scroll to Form Button
scrollToFormBtn.addEventListener("click", () => {
  document.getElementById("calculator-section").scrollIntoView({ behavior: "smooth" });
  document.getElementById("weight").focus();
});

// Toggle Grocery List
groceryToggle.addEventListener("click", () => {
  const isHidden = groceryContent.classList.contains("hidden");
  if (isHidden) {
    groceryContent.classList.remove("hidden");
    toggleGroceryBtn.textContent = "Hide Items ▲";
  } else {
    groceryContent.classList.add("hidden");
    toggleGroceryBtn.textContent = "View Items ▼";
  }
});

// Print / PDF Button
printBtn.addEventListener("click", () => {
  // If in single view, temporarily switch to all days so user prints entire week
  const originalView = currentViewMode;
  renderAllDaysView();
  window.print();
  if (originalView === "single") {
    renderSingleDayView(activeDayIndex);
  }
});

// Copy Full Plan as Clean Text
copyPlanBtn.addEventListener("click", () => {
  if (!currentPlan) return;

  let text = `🌴 KERALA FAT LOSS 7-DAY DIET PLAN 🌴\n`;
  text += `Target Calories: ${currentPlan.metrics.targetCalories} kcal/day | TDEE: ${currentPlan.metrics.tdee} kcal\n`;
  text += `Target Daily Water: ${currentPlan.metrics.water.litres} Litres (~${currentPlan.metrics.water.glasses} glasses)\n`;
  text += `Recommended Hydration: Jeera Vellam or Pathimukham boiled water\n`;
  text += `Target Macros: Protein ${currentPlan.metrics.macros.proteinGrams}g | Carbs ${currentPlan.metrics.macros.carbsGrams}g | Fats ${currentPlan.metrics.macros.fatGrams}g\n`;
  text += `--------------------------------------------------\n\n`;

  currentPlan.days.forEach((day) => {
    text += `📅 ${day.dayName.toUpperCase()} (~${day.totals.calories} kcal)\n`;
    text += `  • Breakfast (${day.breakfast.calories} kcal): ${day.breakfast.title}\n    ${day.breakfast.desc}\n`;
    text += `  • Lunch (${day.lunch.calories} kcal): ${day.lunch.title}\n    ${day.lunch.desc}\n`;
    text += `  • Snack 4 PM (${day.snack.calories} kcal): ${day.snack.title}\n    ${day.snack.desc}\n`;
    text += `  • Dinner (${day.dinner.calories} kcal): ${day.dinner.title}\n    ${day.dinner.desc}\n\n`;
  });

  text += `💡 KERALA FAT LOSS GOLDEN RULES:\n`;
  text += `1. Limit coconut oil to 2-3 teaspoons per day.\n`;
  text += `2. Keep Matta rice portion to 1 cup cooked (120g); double your vegetable thoran.\n`;
  text += `3. Drink Sambharam (spiced buttermilk) instead of sugary drinks.\n`;
  text += `4. Prefer Kudampuli fish curries over coconut cream gravies.\n`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 Full 7-Day Plan copied to clipboard!");
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
});

function fallbackCopy(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showToast("📋 Plan copied to clipboard!");
}

// Auto-run once on load for immediate interactive demonstration
window.addEventListener("DOMContentLoaded", () => {
  // Trigger initial generate so the app is immediately alive and readable
  dietForm.dispatchEvent(new Event("submit"));
});

