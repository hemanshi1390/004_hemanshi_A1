
global.myGlobalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(global.myGlobalVar);
}

console.log("Directory name:", __dirname);
console.log("File name:", __filename);

setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000);

console.log("Process Platform:", process.platform);
console.log("Node.js Version:", process.version);

printGlobalVar();
