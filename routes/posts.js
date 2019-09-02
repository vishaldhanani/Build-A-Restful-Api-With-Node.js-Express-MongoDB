const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');


//GET BACK ALL THE POSTS
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//SUBMIT THE DATA IN DATABASE
router.post('/', async (req,res)=>{
    const post = new Post({
            title: req.body.title,
            description: req.body.description
    });


 try{
   const savedPost = await post.save();
   res.json(savedPost);
    }
    catch(err){
        res.json({message:err});
    }
    });

//GET BACK PARTICULAR THE POST BY ID
router.get('/:PostId', async (req, res) => {
 try{
        const post = await Post.findById(req.params.PostId);        
        res.json(post);
    }catch(err){
        res.json({message:err});
    } 
});

//DELETE POST
router.delete('/:PostId', async (req, res) => {
    try{
           const removedPost = await Post.remove({_id: req.params.PostId});        
           res.json(removedPost);
       }catch(err){
           res.json({message:err});
       } 
   });


//UPDATE POST
router.patch('/:PostId', async (req, res) => {
    try{
           const updatedPost = await Post.updateOney
           (
               {_id: req.params.PostId}, 
               {$set: {title: req.body.title}                       
            });        
           res.json(updatedPost);
       }catch(err){
           res.json({message:err});
       } 
   });

module.exports = router; 

