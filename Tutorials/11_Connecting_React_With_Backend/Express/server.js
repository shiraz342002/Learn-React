import express from 'express';
import cors from 'cors'; // Import cors
const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the backend');
});

app.post('/', (req, res) => {
  console.log(req.body); // Log the request body
  res.json({ status: 'Data received' }); // Send JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
