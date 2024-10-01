import { gql } from 'apollo-server'

const typeDefs = gql`
	scalar Date

	type Cost {
		id: ID!
		date: Date
		description: String
		amount: Float
	}

	type Query {
		costs: [Cost]
	}

	type Mutation {
		addCost(date: Date!, description: String!, amount: Float!): Cost
	}
`
export default typeDefs
