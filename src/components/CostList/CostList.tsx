import CostItem from '../CostItem/CostItem'
import { ICosts } from '../../types'
import styles from './CostList.module.css'

const CostList = ({ costs }: ICosts) => {
	if (costs.length === 0) {
		return (
			<h2 className={styles['cost-list__fallback']}>
				В этом году расходов нет
			</h2>
		)
	}

	return (
		<ul className={styles['cost-list']}>
			{costs.map(cost => (
				<li key={cost.id}>
					<CostItem
						date={cost.date}
						description={cost.description}
						amount={cost.amount}
					/>
				</li>
			))}
		</ul>
	)
}

export default CostList
