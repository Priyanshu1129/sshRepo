import mongoose from 'mongoose';

const connectdb = async(URL)=>{
    try{
        const db_Options = {
            dbName : 'Ecommerce',
        }
        await mongoose.connect(URL,db_Options);
        console.log('db connected');
    }catch(e){
        console.log(e);
    }
}

export default connectdb;