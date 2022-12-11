// INSTRUCTOINS: Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    const pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.topping = toppings;
    
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("cauliflower", "normal", ["mozzarella, feta"], ["mushrooms, olives, basil, onion"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "extra marinara", ["extra mozzarella, parmesan"], ["sausage, peppers"]);
console.log(pizza4);


// > Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
console.log(randomPizza());
function randomPizza() {
    var pizza = {};

    var randCrust = Math.floor(Math.random() * 10);
    pizza.crust = pickCrust(randCrust);

    var randSauce = Math.floor(Math.random() * 10);
    pizza.sauce = pickSauce(randSauce);

    var randCheese = Math.floor(Math.random() * 10);
    pizza.cheese = pickCheese(randCheese);

    var randTopping = Math.floor(Math.random() * 10);
    pizza.topping = pickTopping(randTopping);

    return pizza;

    function pickCrust(randCrust) {
        // Pick crust type
        if(randCrust==1 || randCrust==3 || randCrust==5) {
            return "hand tossed";
        }
        else if(randCrust==2 || randCrust== 4) {
            return "thin";
        }
        else if(randCrust==6 || randCrust==8) {
            return "deep dish"
        }
        else if(randCrust==7 || randCrust==9) {
            return "stuffed"
        }
        else {
            return "cauliflower"
        }
    }

    function pickSauce(randSauce) {
        // Pick sauce type
        if(randSauce==0 || randSauce==1 || randSauce==2) {
            return "marinara"
        }
        else if(randSauce==3 || randSauce==4 ||randSauce==5) {
            return "garlic and olive oil"
        }
        else if(randSauce==6 || randSauce==7) {
            return "BBQ"
        }
        else {
            return "spicy marinara"
        }
    }

    function pickCheese(randCheese) {
        // Pick cheese
        if(randCheese>3) {
            return "mozzarella";
        }
        else if(randCheese>6) {
            return ["mozzarella, feta"];
        }
        else if(randCheese>9) {
            return ["mozzarella, parmesan"];
        }
        else {
            return ["mozzarella, cheddar"];
        }
    }

    function pickTopping(randTopping) {
        if(randCheese>3) {
            return "pepperoni";
        }
        else if(randCheese>6) {
            return ["sausage, peppers"];
        }
        else if(randCheese>9) {
            return "jalapeno";
        }
        else {
            return ["pepperoni, salami, onion"];
        }
    }
}


