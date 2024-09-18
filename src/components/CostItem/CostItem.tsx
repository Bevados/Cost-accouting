import './CostItem.css'
import { ICostItem } from '../../types'
import CostDate from '../CostDate/CostDate'
import Card from '../../ui/Card/Card'

const CostItem: React.FC<ICostItem> = ({ date, description, amount }) => {
	return (
		<Card className='cost-item'>
			<CostDate date={date} />
			<div className='cost-item__description'>
				<h2>{description}</h2>
				<div className='cost-item__price'>${amount}</div>
			</div>
		</Card>
	)
}

export default CostItem
