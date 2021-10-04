import { area_rec, area_cir, area_cylinder } from "./lib.js";

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

area_rec(length, breadth);
area_cir(pi, radius);
area_cylinder(pi, radius, height);
