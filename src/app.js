
import express from "express";
import bookingRoutes from "./modules/booking/booking.route.js"


const app = express();



app.use('/api', bookingRoutes);

export default app;