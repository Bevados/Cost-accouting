import { WrapperProps } from '../../types'
import styles from './Card.module.css'

const Card = ({ children, className }: WrapperProps) => {
	return <div className={`${styles.card} ${className}`}>{children}</div>
}

export default Card
