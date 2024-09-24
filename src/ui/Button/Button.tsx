import { IButtonProps } from '../../types'

const Button: React.FC<IButtonProps> = ({ children, type, onClickHandler }) => {
	return (
		<button type={type} onClick={onClickHandler}>
			{children}
		</button>
	)
}

export default Button
