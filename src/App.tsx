// import CostItem from './components/CostItem/CostItem'
import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import { ICostItem } from './types'

const INITIAL_COSTS: ICostItem[] = [
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
	const [costs, setCosts] = useState<ICostItem[]>(INITIAL_COSTS)

	const addCostHandler = (cost: ICostItem) => {
		setCosts(prewCosts => [...prewCosts, cost])
	}

	return (
		<>
			<NewCost addCostHandler={addCostHandler} />
			<Costs costs={costs} />
		</>
	)
}

export default App
