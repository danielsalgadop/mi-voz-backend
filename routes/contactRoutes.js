const express = require('express');
const router = express.Router();
const { connect } = require('../connections/MysqlConnection');
const Contact = require('../domain/entity/contact');
const { contact } = require('../domain/entity/contact');



router.get('/', (req, res) => {
    connect()
    .then((connection) =>{
        let sql = 'SELECT * from contact';

        connection.query( sql, (err, rows, fields) => {

            let asjson = [];
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
    connect().then((connection) =>{
        let sql = 'SELECT * from contact WHERE id = '+ req.params.id;
        connection.query(sql, (err, rows, field ) => {

            res.end(Contact.toJson());
            // let asjson = [];
            // for (var i = 0; i < rows.length; i++) {
                // asjson.push({ 'telephone': rows[i].telephone, 'name': rows[i].name, 'surname': rows[i].surname });
            // }
            // res.end(JSON.stringify(asjson));
        });
    })
    // res.send('contacts with id ' + req.params.id)
});

router.post('/', (req, res) => {
    res.send('POSTcontacts')
});
module.exports = router;