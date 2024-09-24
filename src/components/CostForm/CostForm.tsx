import { useState } from 'react'
import { ICostForm } from '../../types'
import './CostForm.css'
import { ICostFormProps } from '../../types'
import Button from '../../ui/Button/Button'

const defaultStateUserInput: ICostForm = {
	name: '',
	amount: '',
	date: ''
}

const CostForm: React.FC<ICostFormProps> = ({
	addCostHandler,
	closeFormCost
}) => {
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
		e.preventDefault()

		const id = (Math.random() * 100000).toFixed(0).toString()

		const newCost = {
			id: id,
			date: new Date(userInput.date),
			description: userInput.name,
			amount: Number(userInput.amount)
		}

		addCostHandler(newCost)
		setUserInput(defaultStateUserInput)
		closeFormCost()
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
					<Button type='submit'>Добавить расход</Button>
					<Button type='button' onClickHandler={closeFormCost}>
						Отмена
					</Button>
				</div>
			</div>
		</form>
	)
}

export default CostForm
