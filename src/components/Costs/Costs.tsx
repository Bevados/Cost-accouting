import CostItem from '../CostItem/CostItem'
import './Costs.css'
import { ICosts } from '../../types'
import Card from '../../ui/Card/Card'
import CostFilter from '../CostFilter/CostFilter'
import { useState } from 'react'

const Costs: React.FC<ICosts> = ({ costs }) => {
	const [year, setYear] = useState<string>('2021')
	console.log(year)


	function onChangeYear(year: string) {
		setYear(year)
	}

	return (
		<Card className='costs'>
			<CostFilter onChangeYear={onChangeYear} year={year} />
			{/* {costs.map(cost => (
				<CostItem
					key={cost.id}
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
				/>
			))} */}

			{costs
				.filter(cost => String(cost.date.getFullYear()) === year)
				.map(cost => (
					<CostItem
						key={cost.id}
						date={cost.date}
						description={cost.description}
						amount={cost.amount}
					/>
				))}
		</Card>
	)
}

export default Costs
