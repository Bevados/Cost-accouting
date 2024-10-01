import { useState } from 'react'
import Card from '../../ui/Card/Card'
import CostFilter from '../CostFilter/CostFilter'
import CostList from '../CostList/CostList'
import CostsDiagram from '../CostsDiagram/CostsDiagram'
import { ICostItem } from '../../types'
import styles from './Costs.module.css'
import { gql, useQuery } from '@apollo/client'


export const GET_COSTS = gql`
	query GetCosts {
		costs {
			id
			description
			amount
			date
		}
	}
`

const Costs = () => {
	const [year, setYear] = useState<string>('2021')

	// Функция изменения года, прокидываю в фильтр
	function onChangeYear(year: string) {
		setYear(year)
	}

	// Получаю данные с сервера
	const { data, loading, error } = useQuery(GET_COSTS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	// Преобразую дату из полученных данных, меняя строку в дату
  const costsData =	data.costs.map((cost: ICostItem) => ({
		...cost,
		date: new Date(cost.date)
	}))

	// Фильтрую данных по году
	const filteredCosts = costsData.filter((cost: ICostItem) => {
		return String(cost.date.getFullYear()) === year
	})


	return (
		<Card className={styles.costs}>
			<CostFilter onChangeYear={onChangeYear} year={year} />
			<CostsDiagram costs={filteredCosts} />
			<CostList costs={filteredCosts} />
		</Card>
	)
}

export default Costs
