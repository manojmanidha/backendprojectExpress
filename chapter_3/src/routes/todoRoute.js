import express from 'express'
// import db from '../db.js'

const router = express.Router()

// to get all the todo list
router.get('/' , (req , res)=>{})

// to create new todo
router.post('/' , (req , res)=>{})

// to update the todo list using id of todo
router.put('/:id' , (req , res)=>{})

// to delete todo
router.delete('/:id' , (req,res)=>{})

export default router