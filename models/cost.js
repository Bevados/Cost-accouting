import mongoose from 'mongoose'

const { Schema } = mongoose

const costSchema = new Schema({
	date: Date,
	description: String,
	amount: Number
})

export const Cost = mongoose.model('Cost', costSchema)
export default Cost