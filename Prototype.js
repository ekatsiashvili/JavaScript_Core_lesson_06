'use strict'

function devide() {
	console.log('====================================');
}

function Robot() {

	let name = 'Robot';
	let action = 'just working';

	let self = this;

	self.work = function() {
		console.log("I " + name + " - i'm " + action + ".");
	}

	self.setName = function(nameValue) {
		name = nameValue;
	}

	self.setAction = function(actionValue) {
		action = actionValue;
	}
}

function CoffeRobot() {

	Robot.call(this);

	this.setName('CoffeRobot');
	this.setAction('jusk make a cofee');
}

function RobotDancer() {

	Robot.call(this);

	this.setName('RobotDancer');
	this.setAction('just dancing');
}

function RobotCooker() {

	Robot.call(this);

	this.setName('RobotCooker');
	this.setAction('just cooking');
}

let robot = new Robot();
robot.work();

let coffeRobot = new CoffeRobot();
coffeRobot.work();

let robotDancer = new RobotDancer();
robotDancer.work();

let robotCooker = new RobotCooker();
robotCooker.work();

let Robots = [];

Robots
		.push(new Robot(), new CoffeRobot(), new RobotDancer(),
				new RobotCooker());

devide();

for (let i = 0; i < Robots.length; i++) {
	Robots[i].work();
}