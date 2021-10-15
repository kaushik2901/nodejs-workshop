// if statement

const a = 10;

if (a < 20) {
    console.log("a is less than 20");
}

// if-else

const b = 30;

if (b < 20) {
    console.log("b is less than 20");
} else {
    console.log("b is greater than 20");
}


// else if

const c = 30;

if (c < 20) {
    console.log("c is less than 20");
} else if(c < 40) {
    console.log("c is greater than 20 and less than 40");
} else {
    console.log("c is greater than 40");
}

// For loop

for (let i = 0; i < 10; i++) {
    console.log(i, "This statement will be logged 10 time!");
}

// While loop

let j = 0;

while (j < 10) {
    console.log(j, "This statement will be logged 10 time!");
    j++;
}


// break 

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }

    console.log(i, "This statement will be logged 10 time!");
}

// continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }

    console.log(i, "This statement will be logged 10 time!");
}