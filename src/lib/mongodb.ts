import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env');
}

export const connectToDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI as string);
    
    if (connection.readyState === 1) {
      console.log('MongoDB Connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return Promise.reject(error);
  }
}; 