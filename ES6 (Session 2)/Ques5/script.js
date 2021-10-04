const lib =  require('./lib');

// rectangle
let length = 10;
let breadth = 5;

// circle
let pi = 3.14;
let radius = 5;

// cylinder
let height = 10;
  
// Calling the functions 
// defined in the lib module

lib.area_rec(length, breadth);
lib.area_cir(pi, radius);
lib.area_cylinder(pi, radius, height);