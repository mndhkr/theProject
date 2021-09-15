const readline = require("readline")
var exec = require('child_process').exec, child;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// while(true) {
//     rl.question("$> ", (command) => {
//         rl.write(command)
//     })
// }

var lineno = 0;
//rl.write("$> ")
rl.on('line', function (command) {
    lineno++;
    //console.log('Line number ' + lineno + ': ' + command);
    //rl.write("$> ")
    if(command) {
    exec(command,
        function (error, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                 console.log(error);
            }
        });
    }

});


