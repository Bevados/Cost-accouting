import { ICostDate } from '../../types'
import styles from './CostDate.module.css'

const CostDate = ({ date }: ICostDate) => {
	const month = date.toLocaleString('ru-Ru', {
		month: 'long'
	})
	const year = date.getFullYear()
	const day = date.toLocaleString('ru-Ru', {
		day: '2-digit'
	})

	return (
		<div className={styles['cost-date']}>
			<div className={styles['cost-date__month']}>{month}</div>
			<div className={styles['cost-date__year']}>{year}</div>
			<div className={styles['cost-date__day']}>{day}</div>
		</div>
	)
}

export default CostDate
