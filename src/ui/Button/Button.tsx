import { IButtonProps } from '../../types'

const Button = ({ children, type, onClickHandler }: IButtonProps) => {
	return (
		<button type={type} onClick={onClickHandler}>
			{children}
		</button>
	)
}

export default Button
