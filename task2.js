const t2 = createSection("Task 2: Closures");

function createCounter(start){
    let count = start;

    return function(){
        print(t2, "Counter: " + count);
        count++;
    };
}

const counter = createCounter(5);

counter();
counter();
counter();


function createCounterArrow(start){
    let count = start;

    return () => {
        print(t2, "Arrow Counter: " + count);
        count++;
    };
}

const counter2 = createCounterArrow(10);

counter2();
counter2();
counter2();