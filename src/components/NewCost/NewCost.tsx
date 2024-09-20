import Card from "../../ui/Card/Card"
import CostForm from "../CostForm/CostForm"
import './NewCost.css'


const NewCost = () => {
	return (
		<Card className='new-cost'>
			<CostForm/>
		</Card>
	)
}

export default NewCost