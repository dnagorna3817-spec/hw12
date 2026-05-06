const t1 = createSection("Task 1: Hoisting");

print(t1, "Before definitions:");

// УСПІШНИЙ ВИКЛИК (function declaration працює)
try {
    print(t1, getCalculation("area")("circle", 10));
} catch (e) {
    print(t1, "Error: " + e.message);
}

// НЕУСПІШНИЙ ВИКЛИК (function expression не працює)
try {
    print(t1, getCalculation("perimeter")("square", 5));
} catch (e) {
    print(t1, "Error: " + e.message);
}


// function declaration (HOISTED)
function calculateArea(shape, value){
    if(shape === "circle") return Math.PI * value * value;
    if(shape === "square") return value * value;
}

// function expression (NOT HOISTED)
const calculatePerimeter = function(shape, value){
    if(shape === "circle") return 2 * Math.PI * value;
    if(shape === "square") return 4 * value;
};

// higher-order function
function getCalculation(type){
    if(type === "area") return calculateArea;
    if(type === "perimeter") return calculatePerimeter;
}


// після оголошення
print(t1, "After definitions:");

print(t1, getCalculation("area")("circle", 10));
print(t1, getCalculation("perimeter")("square", 5));