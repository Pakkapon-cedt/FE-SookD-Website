import express from "express";
import productRoutes from "./routes/productRoutes";
import activityRoutes from "./routes/activityRoutes";
import reviewRoutes from "./routes/reviewRoutes"
import orderRoutes from "./routes/orderRoutes"
import promotionRoutes from "./routes/promotionRoutes"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/activities",activityRoutes );
app.use("/api/reviews",reviewRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/promotions",promotionRoutes);

const PORT = 3000;

// console.log(process.env.SPREADSHEET_ID);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});