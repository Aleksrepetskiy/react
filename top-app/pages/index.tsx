import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Some text</Htag>
			<Htag tag="h2">Some text</Htag>
			<Htag tag="h3">Some text</Htag>
			<Button appeareance='primary'>Кнопка</Button>
			<Button appeareance='ghost'>Кнопка</Button>
		</div>
	);
}
