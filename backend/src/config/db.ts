import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const connectDB = async (): Promise <void> => {
try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Bd connected : ${connection.connection.host}`);
}catch(error){
    console.error(`Error: ${error instanceof Error ? error.message : 'unknown error'}`)
    process.exit(1)
}

}
export default connectDB;