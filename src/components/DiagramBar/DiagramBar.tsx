import { IDiagramBarProps } from '../../types'
import styles from './DiagramBar.module.css'

const DiagramBar = ({ value, label, maxValue }: IDiagramBarProps) => {
	let barFillHeight = '0%'

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + '%'
	}

	return (
		<div className={styles['diagram-bar']}>
			<div className={styles['diagram-bar__inner']}>
				<div
					className={styles['diagram-bar__fill']}
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className={styles['diagram-bar__label']}>{label}</div>
		</div>
	)
}

export default DiagramBar
