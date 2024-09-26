import { useState } from 'react'
import Button from '../../ui/Button/Button'
import { ICostForm, ICostFormProps } from '../../types'
import styles from './CostForm.module.css'

const defaultStateUserInput: ICostForm = {
	name: '',
	amount: '',
	date: ''
}

const CostForm = ({ addCostHandler, closeFormCost }: ICostFormProps) => {
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
			<div className={styles['new-cost__controls']}>
				<div className={styles['new-cost__controls-wrap']}>
					<label htmlFor='name'>Название</label>
					<input
						id='name'
						type='text'
						onChange={nameChangeHadler}
						value={userInput.name}
					/>
				</div>
				<div className={styles['new-cost__controls-wrap']}>
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
				<div className={styles['new-cost__controls-wrap']}>
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
				<div className={styles['new-cost__actions']}>
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
