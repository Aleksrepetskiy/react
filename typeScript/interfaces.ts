type Point = {
	x: number,
	y: number
}

type stringOrNumber = string | number;

interface IPoint {
	x: number,
	y: number
}

interface I3dPoint extends IPoint {
	z: number
}

function print(coord: IPoint) {

}