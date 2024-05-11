const express = require('express');
const router = express.Router();
const Person = require('./../module/Person');

router.post('/',async (req,res)=>{
    try {
        const data = req.body 

        // const newPerson = new Person();
        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.profession = data.profession;
        // newPerson.experience = data.experience;
        // newPerson.email = data.email;

        // easy way 

        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved successfully");
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
   

    // save new person in database

    // this is old way ,no longer accept the calleback
    // newPerson.save((error,person)=>{
    //     if(error){
    //         console.log("error saving person data",error);
    //         res.status(500).json(error,'internal server error');
    //     }
    //     else{
    //         console.log("person data saved successfully");
    //         res.status(200).json(person);
    //     }
    // });

});
router.get('/',async (req,res)=>{
    try {
        const data =await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internel Server Error'});
    }
});

module.exports = router;