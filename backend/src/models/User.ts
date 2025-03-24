import mongoose, { Schema } from 'mongoose';
import {IUserDocument} from '../types';

const userSchema = new Schema<IUserDocument>(
    {
        firstName:{
            type: String,
            required: [true, 'First name is required'],
            trim: true,
        },
        lastName:{
            type: String,
            required: [true, 'Last name is required'],
            trim: true,
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']

        },
        phoneNumber:{
            type: String,
            required: [true, 'Country is required'],
            trim: true,
        },
        city:{
            type: String,
            required: [true, 'City is required'],
            trim: true,
        }
    },{
        timestamps: true,
    }
)

const User = mongoose.model<IUserDocument>('User',userSchema)
export default User;