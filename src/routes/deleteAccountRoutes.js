const express = require('express');
const router = express.Router();
const deleteAccountController = require('../controllers/deleteAccountController');

// Step 1: Send OTP for delete confirmation
router.post('/send-otp', deleteAccountController.sendOtp);

// Step 2: Verify OTP & delete/disable account
router.post('/verify-otp', deleteAccountController.verifyOtp);

module.exports = router;
