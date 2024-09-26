import { ICostFilterProps } from '../../types'
import styles from './CostFilter.module.css'

const CostFilter = ({ onChangeYear, year }: ICostFilterProps) => {
	const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeYear(e.target.value)
	}

	return (
		<div className={styles['costs-filter']}>
			<div className={styles['costs-filter__control']}>
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
