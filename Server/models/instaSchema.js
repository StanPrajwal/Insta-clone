const moggoose = require('mongoose')

const instaSchema = moggoose.Schema({
    name:{type:String,required:true},
    location:String,
    imageUrl:{
        imageUrl:{type:String},
        public_id:{type:String,required:true}
    },
    description:String
})

const InstaPost = moggoose.model('InstaPost',instaSchema)

module.exports = InstaPost;