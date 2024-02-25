import express from "express";
import axios from 'axios';
import path from "path";
import cors from 'cors';
import defineApiParameters from "./components/DefineApiParameters";
import { jsonToArray } from "./components/Utils";


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
// Serve the React static files after build
app.use(express.static("../client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const apiUrl = defineApiParameters();

app.get("/api/data", async(req, res) => {
  
  try {
    const apiResponse = await axios.get(apiUrl);
    const modifiedData = jsonToArray(apiResponse.data.prices);
    res.json(modifiedData);
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});