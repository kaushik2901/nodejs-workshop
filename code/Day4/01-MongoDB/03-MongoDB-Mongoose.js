const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/test";

mongoose.connect(uri);

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date },
});

const User = mongoose.model('User', userSchema);

// Insert
const data = new User({
    firstName: "Test",
    lastName: "User",
    email: "test@user.com",
    birthDate: new Date(2021, 01, 01)
})

data.save();

// Inserts with validation
const invalidData = new User({
    firstName: "Test 2",
    email: "Test@test.com"
});
invalidData.save();

// Read
User.findOne({ firstName: "Test" }).then(console.log);

// Update - 1
User.updateOne({ firstName: "Test" }, { $set: { email: "test-updated@email.com" } }).then(console.log);

// Update - 2 
User.findOne({ firstName: "Test" })
    .then(user => {
        user.email = "new-way-to@update.com";
        user.save();
    })

// Remove - 1
User.deleteOne({ firstName: "Test" });

// Remove - 2
User.findOne({ firstName: "Test" })
    .then(user => {
        user.remove();
    })

