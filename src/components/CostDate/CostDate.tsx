import { ICostDate } from '../../types'
import './CostDate.css'

const CostDate: React.FC<ICostDate> = ({ date }) => {
	const month = date.toLocaleString('ru-Ru', {
		month: 'long'
	})
	const year = date.getFullYear()
	const day = date.toLocaleString('ru-Ru', {
		day: '2-digit'
	})

	return (
		<div className='cost-date'>
			<div className='cost-date__month'>{month}</div>
			<div className='cost-date__year'>{year}</div>
			<div className='cost-date__day'>{day}</div>
		</div>
	)
}

export default CostDate
