import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationPage.module.css';
const FIXED_AMOUNT = 500;
const EVENT_NAME = "RASS 2025";
const COMPANY_NAME = "UIT Events";
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
const BACKEND_URL = "http://localhost:3000";
const loadScript = (src) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => resolve(true);
  script.onerror = () => resolve(false);
  document.body.appendChild(script);
});

export default function RegistrationPage() {
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    collegeId: '',
  });

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js').then(ready => {
      setRazorpayReady(ready);
    });
  }, []);

  const sendTicket = async (paymentDetails) => {
    try {
      const response = await fetch(`${BACKEND_URL}/send-ticket`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentDetails),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Ticket request sent successfully:', result);
      } else {
        console.error('Failed to send ticket:', result.message);
        alert(`Your payment was successful, but we had an issue emailing the ticket. Please contact support with Payment ID: ${paymentDetails.paymentId}`);
      }
    } catch (error) {
      console.error('Error sending ticket request:', error);
      alert(`Your payment was successful, but the ticket email failed. Please contact support with Payment ID: ${paymentDetails.paymentId}`);
    } finally {
      setPaymentInProgress(false);
    }
  };
  const displayRazorpay = () => {
    if (paymentInProgress || !razorpayReady) return;
    if (!form.name || !form.email || !form.phone || !form.collegeId) {
      alert('Please fill all fields.');
      return;
    }
    setPaymentInProgress(true);
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: FIXED_AMOUNT * 100,
      currency: "INR",
      name: COMPANY_NAME,
      description: `Registration for ${EVENT_NAME}`,
      image: "/images/logo.png",
      handler: function (response) {
        alert('Payment Successful! Your payment ID is: ' + response.razorpay_payment_id);
        const paymentDetails = {
          paymentId: response.razorpay_payment_id,
          name: form.name,
          email: form.email,
          phone: form.phone,
          collegeId: form.collegeId,
          amount: FIXED_AMOUNT,
        };
        sendTicket(paymentDetails);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      notes: {
        event: EVENT_NAME,
        college_id: form.collegeId,
      },
      theme: {
        color: "#FFD966",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', function (response) {
      setPaymentInProgress(false);
      alert(`Payment Failed: ${response.error.description}`);
    });
    paymentObject.open();
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.mainFormContainer}>
        <Link to="/" className={styles.goBackLink}>
          &larr; Go Back
        </Link>
        <div className={styles.header}>
          <h1 className={styles.eventName}>
            RASS
            <span>
              2025
            </span>
          </h1>
          <div className={styles.registrationLabel}>Registration</div>
          <p className={styles.description}>
            Fill in your details and click below to pay and register.
          </p>
        </div>
        <form
          className={styles.form}
          onSubmit={e => { e.preventDefault(); displayRazorpay(); }}
        >
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="College ID"
            value={form.collegeId}
            onChange={e => setForm(f => ({ ...f, collegeId: e.target.value }))}
            className={styles.input}
            required
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!razorpayReady || paymentInProgress}
          >
            {paymentInProgress ? 'Redirecting to Payment...' : `Register and Pay ₹${FIXED_AMOUNT}`}
          </button>
          {!razorpayReady && <p className={styles.loadingMessage}>Loading payment script...</p>}
        </form>
      </div>
    </div>
  );
}