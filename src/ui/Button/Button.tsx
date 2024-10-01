import { IButtonProps } from '../../types'

const Button = ({ children, type, onClickHandler, disabled }: IButtonProps) => {
	return (
		<button type={type} onClick={onClickHandler} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
