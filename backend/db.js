const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://navin-kumar:n3zVccIS4FgMjhMo@cluster0.yejdlt8.mongodb.net/paytm?retryWrites=true";

console.log("Connecting to MongoDB:", mongoURI);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successful! 🥰');
}).catch((error) => {
    console.error('DB connection error:', error);
});


// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
