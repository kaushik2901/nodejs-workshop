const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.on('line', v => {
//     console.log(v);
//     readline.close();
// });

readline.question('Input name : ', name => {
    console.log(`Hello, ${name}`);
    readline.close();
});

readline.question('Input name 2 : ', name => {
    console.log(`Hello, ${name}`);
    readline.close();
});