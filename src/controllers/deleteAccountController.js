const deleteAccountService = require('../services/deleteAccountService');

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const message = await deleteAccountService.sendOtp(email);

    res.status(200).json({
      success: true,
      message
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const message = await deleteAccountService.verifyOtp(email, otp);

    res.status(200).json({
      success: true,
      message
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
