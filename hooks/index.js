(function(exports){

	var  http 		= require('http')
		, _ 	 	= require('underscore')
		, hook 		= {}
		, db;

	exports.run =function(options){
		db = options.db;
	}
	exports.routes = function(app){
	
		app.get("/hello",function(req,res){
			res.send("world")
		})

		app.get("/count",function(req,res){
			db.count("instance",{},function(err,data){
				res.send("there are "+data+" visitors on the site now.")
			})		
		})

		app.get("/amILoggedIn",function(req,res){
			res.send(_.has(req.session,"p"))	
		})

		app.get("/blog",function(req,res){
			res.render('posts.jade');
		})
	return app;
	}

return exports;
})(exports)
