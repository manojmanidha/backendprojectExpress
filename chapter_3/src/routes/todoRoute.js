import express from 'express'
// import db from '../db.js'

const router = express.Router()

// to get all the todo list
router.get('/' , (req , res)=>{
    console.log('req' , req.body)
})

// to create new todo
router.post('/' , (req , res)=>{
    console.log('req' , req.body)
})

// to update the todo list using id of todo
router.put('/:id' , (req , res)=>{
    console.log('req' , req.body)
})

// to delete todo
router.delete('/:id' , (req,res)=>{})

export default router