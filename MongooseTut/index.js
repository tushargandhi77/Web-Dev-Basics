var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true});

mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);