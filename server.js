
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.post('/send-ticket', (req, res) => {
    console.log('Received data for ticket:', req.body);

    const { name, email, paymentId, amount } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"RASS 2025 Events" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Your Ticket for RASS 2025!',
        html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <h1 style="color: #4f46e5;">Congratulations, ${name}!</h1>
                <p>You have successfully bought a ticket for <b>RASS Dandiya Night 2025</b>!</p>
                <p>We are excited to have you come aboard for a spectacular evening of music, dance, and celebration.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <h3 style="color: #4f46e5;">Your Ticket Details</h3>
                <p><b>This email is your official ticket.</b> Please present it at the event entrance.</p>
                <ul>
                    <li><b>Payment ID:</b> ${paymentId}</li>
                    <li><b>Amount Paid:</b> ₹${amount}</li>
                    <li><b>Event:</b> RASS 2025</li>
                    <li><b>Date:</b> October 12th, 2025</li>
                </ul>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p>We look forward to seeing you there!</p>
                <p>Best regards,<br>The UGI Events Team</p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Nodemailer Error:', error);
            return res.status(500).json({ message: 'Error sending email', error: error.message });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Ticket sent successfully to ' + email });
    });
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
