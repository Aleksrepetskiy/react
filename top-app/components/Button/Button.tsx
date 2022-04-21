import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appeareance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appeareance == 'primary',
			[styles.ghost]: appeareance == 'ghost',
		})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down',
				[styles.right]: arrow == 'right',
			})}>
				<ArrowIcon></ArrowIcon>
			</span>}
		</button>

	);
};