import { WrapperProps } from '../../types'
import './Card.css'

const Card: React.FC<WrapperProps> = ({ children, className }) => {
	const classes = 'card' + ' ' + className

	return <div className={classes}>{children}</div>
}

export default Card
