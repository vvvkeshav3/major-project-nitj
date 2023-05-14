export default getRequirements = (
  data,
  carbs_ = 40,
  proteins_ = 30,
  fats_ = 30,
  break_ = 35,
  lunch_ = 40,
  dinner_ = 25
) => {
  //  BMR - basal metabolic rate
  //  REF -  https://www.calculator.net/calorie-calculator.html
  let bmr = 0;
  const { weight, height, age, gender, activity, goal } = data;
  if (gender == 0) bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  else bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  if (activity == 0) {
    bmr = Math.round(bmr * 1.2);
  } else if (activity == 1) {
    bmr = Math.round(bmr * 1.3752);
  } else if (activity == 2) {
    bmr = Math.round(bmr * 1.46525);
  } else {
    bmr = Math.round(bmr * 1.54984);
  }
  bmr = bmr + goal * 1000;

  //   Resource : https://iamherbalifenutrition.com/healthy-weight/count-best-macronutrient-ratio/
  //   40% of your calories from carbs
  // 30% of your calories from protein
  // 30% of your calories from fats
  // Protein has 4 calories per gram
  // Carbohydrate has 4 calories per gram
  // Fat has 9 calories per gram

  let carbs = Math.round(((carbs_ / 100) * bmr) / 4);
  let proteins = Math.round(((proteins_ / 100) * bmr) / 4);
  let fats = Math.round(((fats_ / 100) * bmr) / 9);
  //   FIBER CALCULATION
  // REF - https://www.healthline.com/health/food-nutrition/how-much-fiber-per-day
  // Women under 50: 25 to 28 grams per day
  // Men under 50: 31 to 34 grams per day
  // Women 51 and older: 22 grams per day
  // Men 51 and older: 28 grams per day

  let fiber = 0;
  if (gender == 1 && age <= 50) fiber = 28;
  else if (gender == 1 && age > 50) fiber = 22;
  else if (gender == 0 && age <= 50) fiber = 34;
  else fiber = 28;
  let breakfast = Math.round((break_ / 100) * bmr);
  let lunch = Math.round((lunch_ / 100) * bmr);
  let dinner = Math.round((dinner_ / 1000) * bmr);
  return {
    calories: bmr,
    proteins: proteins,
    carbs: carbs,
    fats: fats,
    fiber: fiber,
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
  };
};
