const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.midleware')
const router = Router()

router.post('./generate', auth,  async (req, res) => {
	try{
		const baseUrl = config.get('baseUrl')
		const {from} = req.body

		const code = shortid.generate()
		
		const existing = await Link.findOne({from})
		if(existing){
			return res.json({link: existing})
		}

		const to = baseurl + '/t/' + code

		const link = new Link({
			code, to, from, owner: req.user.userId
		})

		await link.save()
		res.status(201).json({link})
	}catch(e){
		res.status(500).json({message: 'You have some problem'})
	}
})

router.get('/', auth, async (req, res) => {
	try{
		const links = await Link.find({owner: null})  ///??
		res.json({links})
	}catch(e){
		res.status(500).json({message: 'You have some problem'})
	}
})

router.get('/:id', auth, async (req, res) => {
	try{
		const link = await Link.findById(req.params.id)  
		res.json({link})
		
	}catch(e){
		res.status(500).json({message: 'You have some problem'})
	}
})


module.exports = router