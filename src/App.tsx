// import CostItem from './components/CostItem/CostItem'
import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import { ICostItem, ICostForm } from './types'

const costs: ICostItem[] = [
	{
		id: 'c1',
		date: new Date(2021, 2, 12),
		description: 'Холодильник',
		amount: 999.9
	},
	{
		id: 'c2',
		date: new Date(2022, 8, 15),
		description: 'Ноутбук',
		amount: 1250.4
	},
	{
		id: 'c3',
		date: new Date(2024, 10, 5),
		description: 'Джинсы',
		amount: 40
	}
]

function App() {
	const [costsState, setCosts] = useState<ICostItem[]>(costs)

	const addCostHandler = (cost: ICostForm) => {
		const id = (Math.random() * 100000).toFixed(0).toString()

		const newCost = {
			id: id,
			date: new Date(cost.date),
			description: cost.name,
			amount: Number(cost.amount)
		}
		setCosts(prew => {
			return [...prew, newCost ]
		})
	}

	return (
		<>
			<NewCost addCostHandler={addCostHandler} />
			<Costs costs={costsState} />
		</>
	)
}

export default App
