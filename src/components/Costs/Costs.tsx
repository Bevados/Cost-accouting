import { useState } from 'react'
import Card from '../../ui/Card/Card'
import CostFilter from '../CostFilter/CostFilter'
import CostList from '../CostList/CostList'
import CostsDiagram from '../CostsDiagram/CostsDiagram'
import { ICosts } from '../../types'
import styles from './Costs.module.css'

const Costs = ({ costs }: ICosts) => {
	const [year, setYear] = useState<string>('2021')

	function onChangeYear(year: string) {
		setYear(year)
	}

	const filteredCosts = costs.filter(
		cost => String(cost.date.getFullYear()) === year
	)

	return (
		<Card className={styles.costs}>
			<CostFilter onChangeYear={onChangeYear} year={year} />
			<CostsDiagram costs={filteredCosts} />
			<CostList costs={filteredCosts} />
		</Card>
	)
}

export default Costs
