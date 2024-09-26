import DiagramBar from '../DiagramBar/DiagramBar'
import { IDiagramProps } from '../../types';
import styles from './Diagram.module.css'



const Diagram = ({ dataSets }: IDiagramProps) => {
	const dataSetsValues = dataSets.map(dataSet => dataSet.value)
	const maxValueDataSets = Math.max(...dataSetsValues);

	return (
		<div className={styles.diagram}>
			{dataSets.map(dataSet => (
				<DiagramBar
					key={dataSet.label}
					value={dataSet.value}
					maxValue={maxValueDataSets}
					label={dataSet.label}
				/>
			))}
		</div>
	)
}

export default Diagram
