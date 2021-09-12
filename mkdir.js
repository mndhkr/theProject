const fs = require("fs")
const process = require("process")

if(process.argv.length > 2) {
    fs.mkdir(process.argv[2], true, (err) => {if(err) console.log(err.message)} );
}