import { ReactNode, CSSProperties } from 'react'

export interface ICostDate {
	date: Date
}

export interface ICostItem {
	id?: string
	date: Date
	description: string
	amount: number
}

export interface ICosts {
	costs: ICostItem[]
}


//Типизация props.children и передаваемых стилей в пропс
export interface WrapperProps {
	children: ReactNode
	className?: CSSProperties | string
}


//Типизация функции диспатч хука useState, которую передаем во вложенный компонент
export interface IFuncButton {
	setNum: React.Dispatch<React.SetStateAction<number>>
}

export interface ICostForm {
	name: string
	amount: string
	date: string
}

export interface IAddCostHandler {
	addCostHandler: (cost: ICostForm) => void
}

export interface ICostFilterProps {
	onChangeYear: (year: string) => void
	year: string
}
