const express = require('express');
const router = express.Router();
const { connect } = require('../connections/MysqlConnection');





router.get('/', (req, res) => {
    connect()
    .then((connection) =>{
        let result = connection.query('SELECT * from contact',
        function (err, rows, fields) {

            let asjson = [];
            var s = "";
            for (var i = 0; i < rows.length; i++) {
                asjson.push({ 'name': rows[i].name, 'surname': rows[i].surname });
            }
            res.end(JSON.stringify(asjson));
        }
        );
    })
    .catch((error)=>{
        // res.status(500).send(error);
        res.status(500).send('Database Error');
    })
});

router.get('/:id(\\d+)', (req, res) => {
    res.send('contacts with id ' + req.params.id)
});

router.post('/', (req, res) => {
    res.send('POSTcontacts')
});
module.exports = router;