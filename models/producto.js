'use strict'

const express = require('express')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nombre:{ type:String, require: true},
    categoria:{type:String, enum{'pantalones','camisas','accesorios','vestidos','faldas'}, require:true},
    precio: {type:Number, require: true},
    genero: {type: String, enum{'hombre', 'mujer'}, require:true},
    descripcion: {type: String, require: true}
})

module.exports = mongoose.model('Product', ProductSchema);
