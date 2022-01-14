import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';



dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/LuckysPetshop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useCreateIndex: true,
// });

const url = `mongodb+srv://edwarde:Swatward3@cluster0.jbdw5.mongodb.net/luckyspetshop?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// mongoose.Promise = Promise; // Set mongoose to use ES6 Promises.

// const dbURI = 'mongodb+srv://edwarde:Swatward3@cluster0.jbdw5.mongodb.net/luckyspetshop?retryWrites=true&w=majority';
// const reconnectTimeout = 5000; // ms.

// function connect() {
//   mongoose.connect(dbURI, {
//       useNewUrlParser: true,
//   useUnifiedTopology: true
//     })
//     .catch(() => {}); // Catch the warning, no further treatment is required
//                       // because the Connection events are already doing this
//                       // for us.
// }

// const db = mongoose.connection;

// db.on('connecting', () => {
//   console.info('Connecting to MongoDB...');
// });

// db.on('error', (error) => {
//   console.error(`MongoDB connection error: ${error}`);
//   mongoose.disconnect();
// });

// db.on('connected', () => {
//   console.info('Connected to MongoDB!');
// });

// db.once('open', () => {
//   console.info('MongoDB connection opened!');
// });

// db.on('reconnected', () => {
//   console.info('MongoDB reconnected!');
// });

// db.on('disconnected', () => {
//   console.error(`MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`);
//   setTimeout(() => connect(), reconnectTimeout);
// });

// connect();

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// app.use(express.static(path.join(__dirname, '/frontend/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
// );
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});