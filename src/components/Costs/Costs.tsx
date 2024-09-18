import CostItem from '../CostItem/CostItem'
import './Costs.css'
import { ICosts } from '../../types'
import Card from '../../ui/Card/Card'

const Costs: React.FC<ICosts> = ({ costs }) => {
	return (
		<Card className='costs'>
			{costs.map(cost => (
				<CostItem
					key={cost.description}
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
				/>
			))}
		</Card>
	)
}

export default Costs
