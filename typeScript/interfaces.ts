export { };

type Point = {
	x: number,
	y: number
}

type d3Point = Point & {
	z: number
}

type stringOrNumber = string | number;

const c = (point: IPoint) => {
	const d: I3dPoint = point as I3dPoint;
}

interface IPoint {
	x: number,
	y: number
}

interface I3dPoint extends IPoint {
	z: number
};

function print(coord: IPoint) {

};

interface Test {
	a: number;
};

interface Test {
	b: number;
};

//Лучше использовать интерфейсы