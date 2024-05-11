const express = require('express');
const router = express.Router();
const menu = require('./../module/menu');

router.post('/',async (req,res)=>{
    try {
        const data = req.body
        const newmenu = new menu(data);
        const response = await newmenu.save();
        console.log("menu data saved successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
});
router.get('/:menutype',async (req,res)=>{
    try {
        const menutype = req.params.menutype;
        if(menutype ==  'breakfast' || menutype ==  'lunch' ||menutype ==  'dinner'){
            const response = await menu.find({type:menutype});
            console.log("data fetched successfully");
            res.status(200).json(response);
        }
        else{
            console.log("Invalid menu type");
            res.status(404).json({error:'Invalid menu type '});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
});

module.exports = router;