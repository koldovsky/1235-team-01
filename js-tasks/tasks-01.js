// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
  let healthLeft = health - damage;
  if (healthLeft < 0) healthLeft = 0;
  return healthLeft;
}

function lovefunc(flower1, flower2) {
  return ((flower1 % 2) + (flower2 % 2)) % 2 != 0;
}

function litres(time) {
  return Math.floor(time / 2);
}

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

function move(position, roll) {
  return (position += roll * 2);
}

function makeNegative(num) {
  if (num > 0) {
    num = -num;
  }
  return num;
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

