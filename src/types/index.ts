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

export interface ICostForm {
	name: string
	amount: string
	date: string
}

export interface IAddCostHandler {
	addCostHandler: (cost: ICostItem) => void
}

export interface ICostFormProps extends IAddCostHandler {
	addCostHandler: (cost: ICostItem) => void
	closeFormCost: () => void
}

export interface ICostFilterProps {
	onChangeYear: (year: string) => void
	year: string
}

export interface IButtonProps {
	children: ReactNode
	type: 'submit' | 'button'
	onClickHandler?: () => void
	// onClickHandler?: Dispatch<React.SetStateAction<boolean>>
}

interface IDataSets {
	label: string
	value: number
}
export interface IDiagramProps {
	dataSets: IDataSets[]
}

export interface IDiagramBarProps extends IDataSets {
	maxValue: number
}