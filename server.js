import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import typeDefs from './schema/typeDefs.js'
import resolvers from './resolvers/costResolvers.js'
import dotenv from 'dotenv'

// Загружаем переменные из .env
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

// Подключение к MongoDB через mongoose
mongoose
	.connect(URL)
	.then(() => console.log('Соединение с Mongo'))
	.catch(err => console.log(`Ошибка соединения: ${err}`))

// Инициализация аполло сервера. Передаем схемы Grapg и resolvers
const server = new ApolloServer({
	typeDefs,
	resolvers
})

//  Прослушивание сервера
server.listen(PORT, err =>
	err
		? console.log(`Ошибка запуска сервера ${err}`)
		: console.log(`Сервер запущен на ${PORT} порту`)
)
