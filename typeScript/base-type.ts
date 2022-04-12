let a: number = 4;
let b: string = 'some';
let c = 'hello';
let j = true;

let arr: string[] = ['dsds', 'eweww'];

let e: any = 3;

function test(a: string): string | string {
	return '';
}

const test2 = (a: number): number => {
	return a * 2;
}


//Если ничего не возвращает то void
const test3 = (a: number): void => {
	return;
}

arr = arr.map((x: string) => x.toLowerCase())

function countCord(cord: { lat: number, long?: number }) {

}

function printed(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString())
	} else if (typeof id === 'string') {
		console.log(id.toUpperCase());
	}
}

function getSum(a: number | number[]) {
	if (Array.isArray(a)) {

	}
}

const x: undefined = undefined;
const z: null = null;