import EventEmitter from "events";
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();

myEmitter.on("Waterfull", () => {
    console.log("Please turn off the motor!");
    // here timeout will print the log after 3 seconds
    setTimeout(() => {
        console.log("Please turn off the motor, it's a gentle reminder!");
    }, 3000);
})

console.log("the script is running");
myEmitter.emit("Waterfull");