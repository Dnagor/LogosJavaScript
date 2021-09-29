function Robot(){
    this.name = "Robot";
    this.job = "працюю";
}

Robot.prototype.work = function(){
    console.log(`Я ${this.name} - я просто ${this.job}.`);
}

function CoffeeRobot(){
    this.name = "CoffeeRobot";
    this.job = "варю каву";
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = Robot;

function RobotDancer(){
    this.name = "RobotDancer";
    this.job = "танцюю";
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = Robot;

function RobotCooker(){
    this.name = "RobotCooker";
    this.job = "танцюю";
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = Robot;

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();
robot.work();
coffeeRobot.work();
robotCooker.work();
robotDancer.work();

console.log("__________________________________")


let arr = [robot,robotCooker,coffeeRobot,robotDancer]
function work(arr){
    for(let key in arr){
        arr[key].work();
    }
}
work(arr);