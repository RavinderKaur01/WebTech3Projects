var mongoose = require('mongoose'), Schema = mongoose.Schema;

var studentSchema = new Schema({
	student_name:String,
	student_number:Number,
	student_email:String,
	student_program:String,
	StudentDateOfJoin:{type:Date,default:Date.now},
	student_term:Number,
	student_GPA:Number
});
mongoose.model('My_Students',studentSchema)
