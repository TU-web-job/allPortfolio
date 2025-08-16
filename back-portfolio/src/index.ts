import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

async function startServer() {
    try{
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not set");
        }
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log("Success Connected");

        const db = client.db(process.env.DB_NAME);

        app.get("/pet", async (req, res) => {
            const pets = await db.collection("pets").find({}).toArray();
            res.json(pets);
        });

        app.use(express.json());
        app.post("/pet", async (req, res) => {
            const { title, date, text, image } = req.body;
            const result = await db.collection("pets").insertOne({title, date: new Date(date), text, image});
            res.json({ id: result.insertedId, title, date: new Date(date), text, image });
        });

        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    } catch(err) {
        console.log(" Error to connect");
    }
}

startServer();