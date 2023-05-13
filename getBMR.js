export default getBMR = (data) => {
  //  BMR - basal metabolic rate
  let bmr = 0;
  const { weight, height, age, gender,activity,goal } = data;
  if (gender == 0) bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  else bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  if(activity==0){
    bmr = Math.round(bmr*1.2);
  }
  else if(activity==1){
    bmr = Math.round(bmr*1.3752);
  }
  else if(activity==2){
    bmr = Math.round(bmr*1.46525);
  }
  else{
    bmr = Math.round(bmr*1.54984);
  }
  bmr = bmr + goal*1000;
  return bmr;
};
