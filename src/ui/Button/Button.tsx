import { IFuncButton } from "../../types"

const Button: React.FC<IFuncButton> = ({setNum}) => {
	return <button onClick={() => setNum((prev: number) => prev + 1)}>Плюс</button>
}

export default Button
