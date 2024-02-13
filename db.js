const mongoose=require('mongoose');

const mongoURI="mongodb+srv://yashraj:y%40shr%40j%40cl0udn0tes@cluster1.csxut0w.mongodb.net/CloudNotes?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);

    mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
        console.log('DB connected');
        })
        .catch((err)=>console.log(err));
