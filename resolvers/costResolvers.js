import Cost from '../models/cost.js'

const costResolver = {
	Query: {
		costs: async () => await Cost.find()
	},

	Mutation: {
		addCost: async (_, { date, description, amount }) => {
			try {
				const newCost = new Cost({ date, description, amount })
				return await newCost.save()
			} catch (err) {
				console.error(err)
				throw new Error('Ошибка при сохранении данных')
			}
		}
	}
}

export default costResolver
