export { };

enum DirectionNum {
	Up,
	Right,
	Down,
	Left
}

enum DirectionString {
	Up = "Up",
	Right = "Right",
	Down = "Down",
	Left = "Left"
}

enum DirectionStringNum {
	Up = 1,
	Down = "Down",
}

enum DirectionCalk {
	Up = 1,
	Left = calcEnum()
}

function calcEnum() {
	return 2
}

function runEnum(obj: { Up: string }) {
	return 2
}

runEnum(DirectionString)

enum Test {
	A
}

let test = Test.A;
let namesA = Test[test]

