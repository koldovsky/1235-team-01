// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
  let healthLeft = health - damage;
  if (healthLeft < 0) healthLeft = 0;
  return healthLeft;
}

