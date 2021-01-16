const router = require('express').Router();
const getHostsDevices = require('./getHostsDevices/host-devices');

router.post('/', getHostsDevices);
router.post('/', (req, res) => {
 console.log(req.body)
 return  res.send({ message: 'We did it!' });
});

module.exports = router;
