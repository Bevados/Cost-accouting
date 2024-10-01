import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider as ApolloProviderLib
} from '@apollo/client'
import { ApolloProviderProps } from './types'


const client = new ApolloClient({
	uri: 'http://localhost:3000',
	cache: new InMemoryCache()
})

const CustomApolloProvider = ({ children }: ApolloProviderProps) => {
	return <ApolloProviderLib client={client}>{children}</ApolloProviderLib>
}

export default CustomApolloProvider
