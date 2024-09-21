import Card from '../../ui/Card/Card'
import CostForm from '../CostForm/CostForm'
import './NewCost.css'
import { IAddCostHandler } from '../../types'

const NewCost: React.FC<IAddCostHandler> = ({ addCostHandler }) => {
	return (
		<Card className='new-cost'>
			<CostForm addCostHandler={addCostHandler} />
		</Card>
	)
}

export default NewCost
