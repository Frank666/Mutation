const router = require('express').Router();
let validate = require('../business/adn');
const DnaModel = require('../models/stats');

router.route('/stats').get((req, res) => {        
    DnaModel.stats(function(err, result){
        if(err) res.status(401).send(err);        
        res.status(200).json(result);
    });
});

router.route('/mutation').post((req, res) => {
    const value = req.body.dna;
    let result = new validate.isMutant().validateDna(value);
    let valid = result;
    let dna = value.toString();    
    let checks = 0;    
    let nochecks = 1;

    nocheck = DnaModel.nextValue(dna);       
    let newDna = new DnaModel.model({ dna, valid, checks, nochecks });    
    
    
    DnaModel.model.findOneAndUpdate(
        { dna: newDna.dna }, { $inc: {checks: valid ? 1 : 0, nocheck: 1 } }, { upsert: true },function(err, response){
            if(result){
                res.status(200).send(true);
            }else{
                res.status(401).send(false);
            }
        }
    ); 

    
});

module.exports = router;