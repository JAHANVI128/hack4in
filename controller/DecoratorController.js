const decoratorSchema = require('../model/DecoratorModel');

const addDecorator = (req,res) => {
    var decorator = new decoratorSchema(req.body);
    decorator.save().then((data) => {
        res.status(201).json({
            flag:1,
            data:data,
            message:"Decorator added successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            flag:0,
            message:err.message
        });
    });
}

const deleteDecorator = (req,res) => {
    const id = req.params.id;
    console.log(id);
    decoratorSchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            data:data,
            message:"Decorator deleted successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in deleting decorator",
            flag:0
        })
    })
}

const updateDecorator = (req,res) => {
    var id = req.params.id;
    var newdecorator = req.body;
    console.log(id);
    console.log(newcaterer);

    decoratorSchema.findByIdAndUpdate(id,newdecorator).then((data) => {
        res.status(200).json({
            data:data,
            message:"Decorator updated successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"error in updating decorator",
            flag:0
        })
    })
}

module.exports = {addDecorator,deleteDecorator,updateDecorator}
