import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

import fs from 'fs';
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.post('/upload-id', upload.single('id_card'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ fileName: req.file.filename });
});

app.post('/send-ticket', (req, res) => {
    console.log('Received data for ticket:', req.body);
    const { name, email, paymentId, amount, id_card_file } = req.body;
    res.status(200).json({ message: 'Ticket sent successfully' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
