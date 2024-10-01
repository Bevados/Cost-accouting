import Card from '../../ui/Card/Card'
import Button from '../../ui/Button/Button'
import CostForm from '../CostForm/CostForm'
import { useState } from 'react'
import styles from './NewCost.module.css'

const NewCost = () => {
	const [newCost, setNewCost] = useState<boolean>(false)

	function openFormCost() {
		setNewCost(true)
	}

	function closeFormCost() {
		setNewCost(false)
	}

	return (
		<Card className={styles['new-cost']}>
			{!newCost && (
				<Button onClickHandler={openFormCost} type='button'>
					Добавить новый расход
				</Button>
			)}
			{newCost && (
				<CostForm
					closeFormCost={closeFormCost}
				/>
			)}
		</Card>
	)
}

export default NewCost
