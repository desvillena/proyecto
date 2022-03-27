// models/Citas.js

import mongoose from 'mongoose'
import MessageSchema from './Message'

const DateSchema = new mongoose.Schema({
    date: Date,
    //Importo del otro Model
    message: [MessageSchema],
})

// Quitar mongoose.models.Date || quitar para ver si funciona

module.exports = mongoose.model('Date', DateSchema)