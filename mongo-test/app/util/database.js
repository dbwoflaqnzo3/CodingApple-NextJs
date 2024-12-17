import { MongoClient } from 'mongodb';

// MongoDB Atlas URL (사용자가 제공한 URL)
const url = 'mongodb+srv://admin:1q2w3e4r%25T@cluster0.qbbcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB 연결 옵션
const options = {

};

let connectDB;

if (process.env.NODE_ENV === 'development') {

  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
      .catch((err) => console.error('Failed to connect to MongoDB', err)); 
  }
  connectDB = global._mongo;
} else {
  
  connectDB = new MongoClient(url, options).connect()
    .catch((err) => console.error('Failed to connect to MongoDB', err)); 
}

export { connectDB };
