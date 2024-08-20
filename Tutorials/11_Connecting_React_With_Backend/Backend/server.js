import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the backend');
});

app.post('/', (req, res) => {
  console.log("Data from front-end");
  
  console.log(req.body);
  res.json({ status: 'Data received' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
