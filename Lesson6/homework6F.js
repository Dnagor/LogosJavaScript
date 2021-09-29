function Robot(){
    this.name = "Robot";
    this.job = "просто працюю"
    this.work = function(){
        console.log(`Я ${this.name} - я ${this.job}.`)
    }
}

function CoffeeRobot(){
    Robot.call(this);
    this.name = "CoffeeRobot";
    this.job = "варю каву"
}

function RobotDancer(){
    Robot.call(this);
    this.name = "RobotDancer";
    this.job = "просто танцюю"
}

function RobotCooker(){
    Robot.call(this);
    this.name = "RobotCooker";
    this.job = "просто готую"
}

let robot = new Robot();
robot.work();
let coffeeRobot = new CoffeeRobot();
coffeeRobot.work();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();
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