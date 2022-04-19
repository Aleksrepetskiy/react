import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appeareance, children }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: appeareance == 'primary',
			[styles.ghost]: appeareance == 'ghost',
		})}>
			{children}
		</button>

	);

};