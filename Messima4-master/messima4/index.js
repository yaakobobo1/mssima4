let express = require('express');
let cors= require('cors')
const db= require('./db/db')
let app = express();
global.Application = app;

app.use(express.json());
app.use(cors())


db.openDb(app)
.then( (state) =>
{
    if(state)
    {
        console.log('data-base is connect');
    }
})
.catch((err)=>
{
    console.log(err);
    
});

app.get('/allFamily', (req,res)=>{
    const con = global.Application.get('CONNECTION');
    const sql = `SELECT * FROM family`;
    con.query(sql, (err,result, fields)=>
    {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(result);
        }
    })

})

app.get('/allTasks', (req,res)=>{
    const con = global.Application.get('CONNECTION');
    const sql = `SELECT tasks.taskID, tasks.description, tasks.finishDate, tasks.familyID, family.nickname FROM tasks INNER JOIN family ON tasks.familyID = family.personID`;
    con.query(sql, (err,result, fields)=>
    {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(result);
        }
    })})

app.post('/addTask', (req,res)=>{
    let {description, finishDate ,  familyID}= req.body 
    const con = global.Application.get('CONNECTION');
    const sql = `INSERT INTO tasks(description, finishDate,familyID) VALUES ('${description}' , '${finishDate}', ${familyID})`;
    con.query(sql, (err,result, fields)=>
    {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(result);
        }
    })
})





app.listen(3000, ()=>
{
    console.log('listenning to 3000');
})