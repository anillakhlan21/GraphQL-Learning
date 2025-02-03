const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

postSchema.virtual('author', {
    localField: 'authorId',
    foreignField: '_id',
    ref: 'User',
    justOne: true
})

module.exports = mongoose.model("Post", postSchema);