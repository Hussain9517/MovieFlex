const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Database = require('nedb');
const movieFlexDb = new Database({filename: 'database/movieflex.db', autoload:true});

router.use(bodyParser.urlencoded({extended:true}));


router.post('/User', async (req,res) => {
    try
    { await movieFlexDb.insert(req.body)
      res.status(200).json({message: "Data Has Been Added Succesfully"});
    }
 
    catch(Error)
    {
       res.status(500).json({message:'Server Side Error: ' + Error});
    }
  
  })
  
  

module.exports = router;