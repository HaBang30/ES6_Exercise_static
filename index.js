// Use static in ES6.

// class Information {
//     constructor(name, description, value) {
//         this.name = name;
//         this.description = description;
//         this.value = value;
//     }


//     calculate(value = this.value) {
//         return this.value * 3;
//     }
// }



// class Geometry extends Information {
//     static id = 1;
//     static studentCode = "MSV1200"
//     constructor (name, description, length, value) {
//         super(name, description, value);
//         this.length = length;
//     }
    
//     get area() {
//         return this.length * this.value;
//     }
    
//     get perimeter() {
//         return this.length * this.value * 2
//     }

// } 

// const rectangle = new Geometry("Rectangle", "it has area and perimeter", 6, 3);

// // output name:
// console.log(rectangle.name); // Rectangle

// // output description:
// console.log(rectangle.description); // It has area and perimeter

// // output area;
// console.log(rectangle.area); // 18

// // output perimeter:
// console.log(rectangle.perimeter); //36

// // Use static
// console.log(Geometry.id + ". " + Geometry.studentCode);


//=========make again this exercise static=========

class Information {
    constructor(name, description, value) {
        this.name = name;
        this.description = description;
        this.value = value;
    }

    calculate(param = this.value = 2) {
        return this.value * 3

    }

}

class Geometry extends Information {
    constructor (name, description, width, value) {
        super(name, description, value);
        this.width = width;
    }

    area(height = this.value) {
        return this.width * height;
    }

}

const rectangle = new Geometry("Rectangle", "Rectangle has width and height", 8, 4);

// output name:
console.log(rectangle.name);

// output description:
console.log(rectangle.description);

// output function Area():
console.log(rectangle.area());

// output function calculate():
console.log(rectangle.calculate());

//=============it already has been finished========