const categorySchema = require('../model/categoryModel');

const createCategory = (req,res) => {
    var category = new categorySchema(req.body);
    category.save().then((data) => {
        res.status(201).json({
            flag:1,
            data:data,
            message:"Category added successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            flag:0,
            message:err.message
        });
    });
}

const deleteCategory = (req,res) => {
    const id = req.params.id;
    console.log(id);
    categorySchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            data:data,
            message:"Category deleted successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in deleting category",
            flag:0
        })
    })
}

const updateCategory = (req,res) => {
    var id = req.params.id;
    var newcategory = req.body;
    console.log(id);
    console.log(newcategory);

    categorySchema.findByIdAndUpdate(id,newcategory).then((data) => {
        res.status(200).json({
            data:data,
            message:"Category updated successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"error in updating category",
            flag:0
        })
    })
}

module.exports = {createCategory,updateCategory,deleteCategory}
