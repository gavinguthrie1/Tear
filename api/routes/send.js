const express = require('express');
const router = express.Router();
const {renderTemplateFile} = require('template-file')
const fs = require('fs');


router.post('/', (req, res, next) => {
    
    console.log(req.query)

    renderTemplateFile('./api/routes/template', req.query)
    .then(
        renderedString => fs.writeFile('/var/spool/sms/outgoing', renderedString, function (err) {
            if (err) return console.log(err);
        })
    );

    res.status(200).json({
        message: 'Post recieved'
    })

});

module.exports = router;