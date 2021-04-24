var mongoose=require('mongoose'),student=mongoose.model('My_Students');

module.exports={
	all:function(req,res){
		student.find({},function(err,students){
			if(err) res.send(err);
			res.render('students',{students:students});
		})
	},
};
