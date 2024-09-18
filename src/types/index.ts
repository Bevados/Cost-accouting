import { ReactNode, CSSProperties } from 'react'

export interface ICostDate {
	date: Date
}

export interface ICostItem {
	date: Date
	description: string
	amount: number
}

export interface ICosts {
	costs: ICostItem[]
}

export interface WrapperProps {
	children: ReactNode
	className?: CSSProperties | string
}
