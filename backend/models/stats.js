const mongoose = require('mongoose');

const schema = mongoose.Schema;

const dnaSchema = new schema({
    dna: { type: String, required: true },
    valid: { type: String, required: true },
    checks: { type: Number, required: true },
    nocheck: { type: Number, required: true }
});

const Dna = mongoose.model('dnamutation', dnaSchema);

function GetAll(){
    let data = Dna.aggregate([{
        $group: {
            _id: null,            
            count_no_mutations: { $sum: "$nocheck" },
            count_mutations: { $sum: "$checks" }
        }},       
        {
            $project: 
            {
                _id:1,
                count_no_mutations: 1,
                count_mutations: 1,
                ratio: { $round: [ { $divide: [ "$count_mutations","$count_no_mutations" ]}, 2] }
            }
        }         
    ]).exec(function(err, res){
        if(err)
            console.log(err);
        console.log(res);
    });    
    return data;
}

function getNextVal(sequenceOfName){
    var sequenceDoc =  Dna.findByIdAndUpdate({
        dna: sequenceOfName
    },{
        $inc: {
            nocheck: 1
        }
    }, function(err, res){
        if(err){
            return 0;
        }else{
            return res.checks;
        }
    });;
    return sequenceDoc.checks;
}  

module.exports = {
    model: Dna,
    nextValue: getNextVal,
    ratio: GetAll
}