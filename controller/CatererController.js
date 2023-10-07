const catererSchema = require('../model/CatererModel');

const addCaterer = (req,res) => {
    var caterer = new catererSchema(req.body);
    caterer.save().then((data) => {
        res.status(201).json({
            flag:1,
            data:data,
            message:"Caterer added successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            flag:0,
            message:err.message
        });
    });
}

const deleteCaterer = (req,res) => {
    const id = req.params.id;
    console.log(id);
    catererSchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            data:data,
            message:"Caterer deleted successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in deleting caterer",
            flag:0
        })
    })
}

const updateCaterer = (req,res) => {
    var id = req.params.id;
    var newcaterer = req.body;
    console.log(id);
    console.log(newcaterer);

    catererSchema.findByIdAndUpdate(id,newcaterer).then((data) => {
        res.status(200).json({
            data:data,
            message:"Caterer updated successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"error in updating caterer",
            flag:0
        })
    })
}

module.exports = {addCaterer,deleteCaterer,updateCaterer}
