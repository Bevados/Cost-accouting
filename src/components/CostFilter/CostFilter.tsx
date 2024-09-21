import { ICostFilterProps } from '../../types'
import './CostFilter.css'

const CostFilter: React.FC<ICostFilterProps> = ({ onChangeYear, year }) => {
	const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeYear(e.target.value)
	}

	return (
		<div className='costs-filter'>
			<div className='costs-filter__control '>
				<label>Выбор по году</label>
				<select value={year} onChange={yearChangeHandler}>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
				</select>
			</div>
		</div>
	)
}

export default CostFilter
