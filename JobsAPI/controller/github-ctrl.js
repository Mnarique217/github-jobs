
var express = require('express');
var router = express.Router();
const request = require('request');
const apiUri = 'https://jobs.github.com/positions';


router.get('/positions', (req, res) => {

    let description = req.query.description != undefined ? req.query.description : '';
    let page = req.query.page != undefined ? req.query.page : '';
    let location = req.query.location != undefined ? req.query.location : '';
    let long = req.query.long != undefined ? req.query.long : '';
    let lat = req.query.lat != undefined ? req.query.lat : '';
    let full_time = req.query.full_time != undefined ? req.params.full_time:'';
    let search = req.query.search != undefined ? req.params.search:'';

    let markdown = req.query.markdown != undefined ? req.query.markdown : '';
    request(`${apiUri}?description=${description}&page=${page}&location=${location}&long=${long}&lat=${lat}&full_time=${full_time}&markdown=${markdown}&search=${search}`, { json: true }, (err, response, body) => {
        if (err) {
            res.json({ err });
        }
        res.json(body);
    });
});

module.exports = router;
