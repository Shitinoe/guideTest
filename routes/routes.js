module.exports = (app) => {
    const db = require("../database/db");
    const collection = "contributor";

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.delete('/:id',(req,res)=>{
        const contributorID = req.params.id;

        db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(contributorID)},(err,result)=>{
            if(err)
                console.log(err);
            else
                res.json(result);
        });
    });

    app.get('/dashboard', function(req,res){
        res.render('dashboard');
    });

    app.get('/dashboard', function(req, res) {
        db.getDB().collection(collection).find({}).toArray((err,documents)=>{
            if(err)
                console.log(err);
            else{
                console.log(documents);
                res.json(documents);
            }
        });
    });

    app.get('/edit', function(req, res) {
        res.render('edit'), {title: 'Edit'};
    });

    app.put('/edit/:id',(req,res)=>{
        const contributorID = req.params.id;
        const userInput = req.body;

        db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(contributorID)},{$set : {funcao : userInput.funcao}},{returnOriginal : false}, (err,result)=>{
            if(err)
                console.log(err);
            else
                res.json(result);
        })
    })

    app.get('/add', function(req, res) {
        res.render('add'), {title: 'Add'};
    });

    app.post('/add',(req,res)=>{
        const userInput = req.body;
        db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
            if(err)
                console.log(err);
            else{
                res.json({result : result, document : result.ops[0]});
            }
        });
    });
    
    app.get('/*', function(req, res) {
        res.render('error');
    });
}