import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CustomApolloProvider from './ApolloProvider'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CustomApolloProvider>
			<App />
		</CustomApolloProvider>
	</StrictMode>
)
