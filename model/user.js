// check user email availability
router.get('/checkEmail/:email', async (req, res) => {
  try {
    const email = req.params.email;

    const result = await User.find({ email: email });

    if (result.length > 0) {
      return res.status(200).json({
        isAvailable: false
      });
    }

    return res.status(200).json({
      isAvailable: true
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error"
    });
  }
});