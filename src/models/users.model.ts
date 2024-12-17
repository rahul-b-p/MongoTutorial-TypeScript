import mongoose,{ Document, Schema } from 'mongoose';

interface IUser extends Document{
    username:string;
    email:string;
    age:number;
}

const userSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
})

const users = mongoose.model<IUser>('users',userSchema);

export default users;