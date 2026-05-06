const t3 = createSection("Task 3: Scope and this");

function greetUser(name = "Guest"){
    print(t3, "Hello " + name);
}

greetUser();
greetUser("Diana");


const user1 = {
    name: "Diana",
    sayHi: function(){
        print(t3, "Regular: " + this.name);
    }
};

user1.sayHi();


const user2 = {
    name: "Diana",
    sayHi: () => {
        print(t3, "Arrow: " + this.name);
    }
};

user2.sayHi();



for(var i = 0; i < 3; i++){}

print(t3, "var i = " + i);

for(let j = 0; j < 3; j++){}

try{
    print(t3, "let j = " + j);
}catch(e){
    print(t3, "Error: " + e.message);
}