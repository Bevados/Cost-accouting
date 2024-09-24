import CostItem from '../CostItem/CostItem'
import { ICosts } from '../../types'
import './CostList.css'

const CostList: React.FC<ICosts> = ({ costs }) => {
	if (costs.length === 0) {
		return <h2 className='cost-list__fallback'>В этом году расходов нет</h2>
	}

	return (
		<ul className='cost-list'>
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
