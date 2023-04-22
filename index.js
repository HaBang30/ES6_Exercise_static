// Use static in ES6.

class Information {
    constructor(name, description, value) {
        this.name = name;
        this.description = description;
        this.value = value;
    }


    calculate(value = this.value) {
        return this.value * 3;
    }
}



class Geometry extends Information {
    constructor (name, description, length, value) {
        super(name, description, value);
        this.length = length;
    }
    
    get area() {
        return this.length * this.value;
    }
    
    get perimeter() {
        return this.length * this.value * 2
    }

} 

const rectangle = new Geometry("Rectangle", "it has area and perimeter", 6, 3);

// output name:
console.log(rectangle.name); // Rectangle

// output description:
console.log(rectangle.description); // It has area and perimeter

// output area;
console.log(rectangle.area); // 18

// output perimeter:
console.log(rectangle.perimeter); //36

