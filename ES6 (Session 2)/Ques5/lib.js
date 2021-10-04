// area of rectangle
let area_rec = function(length, breadth) {
    let a = length * breadth;
    console.log('Area of the rectangle is ' + a + ' square unit');
}

// area of circle
let area_cir = function(pi,radius) {
    let b = pi * radius * radius;
    console.log('Area of the circle is ' + b + ' square unit');
}

// area of cylinder
let area_cylinder = function(pi,radius,height) {
    let c = ((2 * pi * radius * height) + (2 * pi * radius * radius));
    console.log('Area of the cylinder is ' + c + ' square unit');
}

module.exports = {
    area_rec,
    area_cir,
    area_cylinder
};
