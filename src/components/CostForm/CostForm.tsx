import { useState } from 'react'
import { ICostForm } from '../../types'
import './CostForm.css'

const defaultStateUserInput: ICostForm = {
	name: '',
	amount: '',
	date: ''
}

const CostForm = () => {
	const [userInput, setUserInput] = useState(defaultStateUserInput)

	const nameChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return { ...prew, name: e.target.value }
		})
	}

	const amountChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return { ...prew, amount: e.target.value }
		})
	}

	const dateChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return {
				...prew,
				date: e.target.value
			}
		})
	}

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		userInput.date = new Date(userInput.date).toLocaleDateString('ru-Ru')

		const newDataCosts = userInput;
		console.log(newDataCosts)
		setUserInput(defaultStateUserInput)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label htmlFor='name'>Название</label>
					<input
						id='name'
						type='text'
						onChange={nameChangeHadler}
						value={userInput.name}
					/>
				</div>
				<div className='new-cost__control'>
					<label htmlFor='sum'>Сумма</label>
					<input
						id='sum'
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHadler}
						value={userInput.amount}
					/>
				</div>
				<div className='new-cost__control'>
					<label htmlFor='date'>Дата</label>
					<input
						id='date'
						type='date'
						min='2020-01-01'
						max='2024-12-31'
						onChange={dateChangeHadler}
						value={userInput.date}
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить расход</button>
				</div>
			</div>
		</form>
	)
}

export default CostForm
