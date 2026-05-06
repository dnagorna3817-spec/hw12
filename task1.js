const t1 = createSection("Task 1: Hoisting");

print(t1, "Before definitions:");

try {
    print(t1, getCalculation("area")("circle", 10));
} catch (e) {
    print(t1, "Error: " + e.message);
}

try {
    print(t1, getCalculation("perimeter")("square", 5));
} catch (e) {
    print(t1, "Error: " + e.message);
}

function calculateArea(shape, value){
    if(shape === "circle") return Math.PI * value * value;
    if(shape === "square") return value * value;
}

const calculatePerimeter = function(shape, value){
    if(shape === "circle") return 2 * Math.PI * value;
    if(shape === "square") return 4 * value;
};

function getCalculation(type){
    if(type === "area") return calculateArea;
    if(type === "perimeter") return calculatePerimeter;
}


print(t1, "After definitions:");

print(t1, getCalculation("area")("circle", 10));
print(t1, getCalculation("perimeter")("square", 5));