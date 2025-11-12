// app.js

// 1. Import the Express library
import express from 'express';

// 2. Create an Express application instance
const app = express();

// 3. Define the port the server will listen on
//    process.env.PORT allows you to set the port via environment variables (e.g., for production)
//    If not set, it will default to 3000
const port = process.env.PORT || 3000;

// 4. Define a route for the root URL ("/")
//    When someone visits the root, this function sends "Hello from EC2!"
app.get('/', (req, res) => {
  res.send('Hello from EC2! This is my first app running.');
});

// 5. Start the server and make it listen for incoming requests
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  console.log('Access this from your browser using the EC2 Public IPv4 address and port (e.g., http://your-ec2-public-ip:3000)');
});