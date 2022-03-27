// models/Message.js

import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    type: String,
    content: String,
})

// Quitar mongoose.models.Message || quitar para ver si funciona

module.exports = MessageSchema