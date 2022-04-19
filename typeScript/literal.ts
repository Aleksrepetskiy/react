export { };
let a: 'test' = 'test';

type actionType = 'up' | 'down';

function performAction(action: actionType): -1 | 1 {
	switch (action) {
		case 'up':
			return 1
		case 'down':
			return -1
	}

}

function performAction2(action: actionType | ComplexAction) {
	switch (action) {
		case 'up':
			return 1
		case 'down':
			return -1
	}

}

interface ComplexAction {
	s: String
}