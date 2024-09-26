import Card from '../../ui/Card/Card'
import CostDate from '../CostDate/CostDate'
import { ICostItem } from '../../types'
import styles from './CostItem..module.css'

const CostItem = ({ date, description, amount }: ICostItem) => {
	return (
		<Card className={styles['cost-item']}>
			<CostDate date={date} />
			<div className={styles['cost-item__description']}>
				<h2>{description}</h2>
				<div className={styles['cost-item__price']}>${amount}</div>
			</div>
		</Card>
	)
}

export default CostItem
