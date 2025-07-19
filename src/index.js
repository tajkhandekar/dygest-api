import express from 'express';
import 'dotenv/config'
import logsRoutes from './routes/logsRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/logs', logsRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) //starts server + confirmation message