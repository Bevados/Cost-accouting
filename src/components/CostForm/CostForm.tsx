import { useState } from 'react'
import Button from '../../ui/Button/Button'
import { ICostForm, ICostFormProps, ICosts } from '../../types'
import styles from './CostForm.module.css'
import { gql, useMutation } from '@apollo/client'
import { GET_COSTS } from '../Costs/Costs'

const defaultStateUserInput: ICostForm = {
	name: '',
	amount: '',
	date: ''
}

const ADD_COST = gql`
	mutation AddCost($date: Date!, $description: String!, $amount: Float!) {
		addCost(date: $date, description: $description, amount: $amount) {
			id
			date
			description
			amount
		}
	}
`

const CostForm = ({ closeFormCost }: ICostFormProps) => {
	// Состояние формы
	const [userInput, setUserInput] = useState(defaultStateUserInput)

	// Получаю функцию мутации
	const [addCost, { loading, error }] = useMutation(ADD_COST, {
		// После успешной мутации обновляем кеш
		update(cache, { data: { addCost } }) {
			// Чтение текущих данных из кеша
			const existingCosts = cache.readQuery<ICosts>({
				query: GET_COSTS
			})

			// Если данные в кеше есть, записываем новые
			if (existingCosts) {
				cache.writeQuery({
					query: GET_COSTS,
					// Обновляем кеш новыми данными
					data: { costs: [...existingCosts.costs, addCost] }
				})
			} else {
				// Если данных в кеше нет, добавляем новый элемент
				cache.writeQuery({
					query: GET_COSTS,
					data: { costs: [addCost] }
				})
			}
		}
	})

	// Изменение поля input name
	const nameChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return { ...prew, name: e.target.value }
		})
	}

	// Изменение поля input amount
	const amountChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return { ...prew, amount: e.target.value }
		})
	}

	// Изменение поля input date
	const dateChangeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserInput(prew => {
			return {
				...prew,
				date: e.target.value
			}
		})
	}

	// Отправка формы
	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const { date, name, amount } = userInput

		try {
			await addCost({
				variables: {
					date: new Date(date),
					description: name,
					amount: Number(amount)
				}
			})
			alert('Расход успешно добавлен')

			setUserInput(defaultStateUserInput)
			closeFormCost()
		} catch (err) {
			console.error(`Ошибка при добавлении расхода: ${err}`)
		}
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
					<Button type='submit' disabled={loading}>
						{loading ? 'Добавление...' : 'Добавить расход'}
					</Button>
					<Button type='button' onClickHandler={closeFormCost}>
						Отмена
					</Button>
					{error && <p>Ошибка: {error.message}</p>}
				</div>
			</div>
		</form>
	)
}

export default CostForm
