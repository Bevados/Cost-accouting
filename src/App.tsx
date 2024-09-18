// import CostItem from './components/CostItem/CostItem'
import Costs from './components/Costs/Costs'
import { ICostItem } from './types'

const costs: ICostItem[] = [
	{
		date: new Date(2021, 2, 12),
		description: 'Холодильник',
		amount: 999.9
	},
	{
		date: new Date(2021, 8, 15),
		description: 'Ноутбук',
		amount: 1250.4
	},
	{
		date: new Date(2021, 10, 5),
		description: 'Джинсы',
		amount: 40
	}
]

function App() {
	return (
		<Costs costs={costs}/>
	)
}

export default App
