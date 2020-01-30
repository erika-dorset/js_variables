var colors;
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// All colors
console.log(colors);

// third color
console.log(colors[2]);

//Add a new color
colors[7] = "navy";
//Change first color
colors[0] = "pink";
console.log(colors);

//Print the length of the array
console.log(colors.length);
// You can also use the length method to add a new array item
colors[colors.length] = "New color";
console.log(colors);

