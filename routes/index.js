const router = require("express").Router();

router.get('/', (req, res) => {
	res.json({
		message: "Welcome to Express",
	});
})

// route Auth
router.use('/auth', require('./auth.routes'))

module.exports = router