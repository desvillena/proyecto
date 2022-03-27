// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,

})
// Quitar mongoose.models.User  quitar para ver si funciona
module.exports = mongoose.models.User || mongoose.model('User', UserSchema)