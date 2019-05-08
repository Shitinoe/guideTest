module.exports = (app) => {
    app.get('/', function(request,response,next){
        response.render('index', {title: 'Login'});
    })
}