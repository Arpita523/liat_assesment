const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory mock database to fulfill node.js backend requirement
const inquiries = [];

// API Endpoint to check server health
app.get('/api/health', (req, res) => {
  res.json({ status: 'Mall of America API is running smoothly' });
});

// API Endpoint to submit inquiry
app.post('/api/inquiries', (req, res) => {
  const { name, company, interest, message } = req.body;
  
  if (!name || !company || !interest) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const newInquiry = {
    id: Date.now().toString(),
    name,
    company,
    interest,
    message,
    timestamp: new Date()
  };
  
  inquiries.push(newInquiry);
  console.log('Received new inquiry:', newInquiry);
  
  res.status(201).json({ 
    success: true, 
    message: 'Inquiry received successfully. Our sales team will contact you shortly.',
    data: newInquiry
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
