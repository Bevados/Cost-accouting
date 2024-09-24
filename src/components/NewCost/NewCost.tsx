import Card from '../../ui/Card/Card'
import CostForm from '../CostForm/CostForm'
import Button from '../../ui/Button/Button'
import { IAddCostHandler } from '../../types'
import './NewCost.css'
import { useState } from 'react'

const NewCost: React.FC<IAddCostHandler> = ({ addCostHandler }) => {
	const [newCost, setNewCost] = useState<boolean>(false)

	function openFormCost() {
		setNewCost(true)
	}

	function closeFormCost() {
		setNewCost(false)
	}

	return (
		<Card className='new-cost'>
			{!newCost && (
				<Button onClickHandler={openFormCost} type='button'>
					Добавить новый расход
				</Button>
			)}
			{newCost && (
				<CostForm
					closeFormCost={closeFormCost}
					addCostHandler={addCostHandler}
				/>
			)}
		</Card>
	)
}

export default NewCost
