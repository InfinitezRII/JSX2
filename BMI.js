export default class BMI{
  bmiCalculate(weight,height,region){
    var x = weight/height**2*10000;
    var y;

    if(region == 'asia'){
      if(x <= 18.5){
        y = "Under weight";
      }
      else if(x > 18.5 && x <= 24.9){
        y = "Normal weight";
      }
      else if(x > 24.9 && x <= 29.9){
        y = "Overweight";
      }
      else{
        y = "Obesity";
      }
    }

    else if(region == 'western'){
      if(x <= 28.5){
        y = "Under weight";
      }
      else if(x > 28.5 && x <= 34.9){
        y = "Normal weight";
      }
      else if(x > 34.9 && x <= 39.9){
        y = "Overweight";
      }
      else{
        y = "Obesity";
      }
    }
    
    return y;
  }
}
