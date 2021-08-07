const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [3, "Author name must be at least 3 characters long"]
		}}, 
		{timestamps:true}
	);
module.exports.author = mongoose.model('author', authorSchema);
