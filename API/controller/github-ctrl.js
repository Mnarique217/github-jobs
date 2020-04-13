
var express = require('express');
var router = express.Router();
const request = require('request');
const apiUri = 'https://jobs.github.com/positions';


router.get('/positions', (req, res) => {
    let concat = '?';
    let requestUri = apiUri;

    if (req.query.page != undefined && req.query.page != '') {
        requestUri = `${requestUri}${concat}page=${req.query.page}`;
        concat = '&';
    }


    if (req.query.location != undefined && req.query.location != '') {
        requestUri = `${requestUri}${concat}location=${req.query.location}`;
        concat ='&';
    }


    if (req.query.full_time != undefined && req.query.full_time != '') {
        requestUri = `${requestUri}${concat}full_time=${req.query.full_time}${req.query.full_time}`;
        concat ='&';
    }


    if (req.query.description != undefined && req.query.description != '' ) {
        requestUri = `${requestUri}${concat}description=${req.query.description}`;
        concat ='&';
    }


    if (req.query.search != undefined && req.query.search != '') {
        requestUri = `${requestUri}${concat}search=${req.query.search}`;
        concat ='&';
    }


    console.log(requestUri);

    request(requestUri, { json: true }, (err, response, body) => {
        if (err) {
            res.json({ err });
        }
        res.json(body);
    });
});

function addParam(url, param) {
    return `${url}${param}`;
}

module.exports = router;
