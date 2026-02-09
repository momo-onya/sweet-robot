//% color="#FADCDC" icon="car"
์namespace SweetieRobot {
    export enum MotorPort {
        //% block="A"
        A = 0,
        //% block="B"
        B = 1,
        //% block="C"
        C = 2,
        //% block="D"
        D = 3,
    }
//% block="motor left %left speed %leftspeed right %right speed %rightspeed"
//% leftspeed.min=-100 leftspeed.max=100
//% rightspeed.min=-100 rightspeed.max=100
export function MotorPair(
    left: MotorPort,
    leftspeed: Number,
    right: MotorPort,
    rightspeed: Number
): void {
    motorRun(left,leftspeed)
    motorRun(right,rightspeed)
}
