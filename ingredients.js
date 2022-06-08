const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("FOR LOOP");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("WHILE LOOP");
let j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j]);
  j++;
}
console.log("BACKWARDS FOR LOOP");
for (let k = ingredients.length-1; k >= 0; k--) {
  console.log(ingredients[k]);
}