import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes';
import sequelize from './config/db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Add this line
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Database connection and server start
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
