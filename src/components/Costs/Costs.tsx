import { useState } from 'react'
import CostFilter from '../CostFilter/CostFilter'
import CostList from '../CostList/CostList'
import Card from '../../ui/Card/Card'
import { ICosts } from '../../types'
import './Costs.css'
import CostsDiagram from '../CostsDiagram/CostsDiagram'

const Costs: React.FC<ICosts> = ({ costs }) => {
	const [year, setYear] = useState<string>('2021')

	function onChangeYear(year: string) {
		setYear(year)
	}

	const filteredCosts = costs.filter(
		cost => String(cost.date.getFullYear()) === year
	)

	return (
		<Card className='costs'>
			<CostFilter onChangeYear={onChangeYear} year={year} />
			<CostsDiagram costs={filteredCosts} />
			<CostList costs={filteredCosts} />
		</Card>
	)
}

export default Costs
