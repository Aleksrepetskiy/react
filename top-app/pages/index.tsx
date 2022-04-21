import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Some text</Htag>
			<Htag tag="h2">Some text</Htag>
			<Htag tag="h3">Some text</Htag>
			<Button appeareance='primary' arrow='right'>Кнопка</Button>
			<Button appeareance='ghost' arrow='down'>Кнопка</Button>
			<P size = 's'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque molestias natus deserunt perspiciatis minus? Iusto quia, eveniet quisquam perferendis nostrum vel rerum corporis officia saepe quaerat vitae, sapiente earum.
			</P>
			<P size = 'm'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque molestias natus deserunt perspiciatis minus? Iusto quia, eveniet quisquam perferendis nostrum vel rerum corporis officia saepe quaerat vitae, sapiente earum.
			</P>
			<P size = 'l'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque molestias natus deserunt perspiciatis minus? Iusto quia, eveniet quisquam perferendis nostrum vel rerum corporis officia saepe quaerat vitae, sapiente earum.
			</P>
			<Tag size='s'>dsdsdss</Tag>
			<Tag size='m' color='red'>dsdsdss</Tag>
			<Tag size='m' color='green' href='rgrgr'>dsdsdss</Tag>
		</div>
	);
}
