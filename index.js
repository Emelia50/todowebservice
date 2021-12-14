const express = require('express');
const  mongoose  = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const todoModel = require('./models/todo_models.js');
const res = require('express/lib/response');
const { config } = require('dotenv');
require('dotenv/config');
app.use(bodyparser.json());


app.get('/todos',(req,res)=>{
    response.send('this is our second api we are building');
});
app.post('/',async(req,res)=>{
    console.todo=todoModel.create({
        title:req.body.title,
        body: req.body.body,
        status: req.body.status,
        endDate: req.body.endDate

    });
    try{
        const saveTodo = await todo.save().where({_id:req.body.status});
        res.json({
            data: saveTodo,
            message:"todo successfully created"
        });
    }catch(err){
        res.json({
        message:err
       });
    }
});

app.get('/todos',async(req,res)=>{
    try {
        const getAllTodos = await todoModel.find();
        res.json({
            data:getAllTodos,
            massage:"operation successful"
        });
    }catch(err){
        res.json({
        massage:err
        });
    }
});
app.get('/todos/:todoid',async(req,res)=>{
    try {
        const getAllTodos = await todoModel.findById({_id:req.body.todoid});
        res.json({
            data:getAllTodos,
            massage:"operation successful"
        });
    }catch(err){
        res.json({
        massage:err
        });
    }
});
app.delete('/todos/:todoId',async(req, res)=>{
    try{
    const deleteTodo = await todoModel.findOneAndDelete({_id:req.params.todoId});
        res.json({
            data: deleteTodo,
            message:"Todo successfully deleted"
        });
    }
    catch(err){
        res.json({
            message:err
        });
    }
});
app.patch('/todo/:todoId',async(req, res)=>{
    try{
    const updateTodo = await todoModel.findOneAndDelete({_id: req.params.todoId},{$set:{
        title: req.body.title,
        status: req.body.status,
        body: req.body.body
    }});
    res.json({
        data: updateTodo,
        message: "Todo successfully updated"
    });

 }catch (err) {
     res.json({
         message:err
     });
 }
});
mongoose.connect(process.env.DB_URL || 2000,
()=>console.log('successfully connected'));
app.listen(1002);