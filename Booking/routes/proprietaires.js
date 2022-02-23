const router = require("express").Router();
const {
  
    userAuth,
   
    checkRole
  } = require("../controllers/Auth");
const {Getallproprietaires,updateproprietaire, deletpropreataire,getProprietaire} = require("../controllers/proprietaireController");
//router.getAllPropratire


router.get('/Getallproprietaires', async(req,res)=>{
  await Getallproprietaires(req,res,"owner-user");
});
router.get('/Getallproprietaires/:propreatairId', async(req,res)=>{
  await getProprietaire(req,res,"owner-user");
});


// router.get("/:propreatairId" , getPropreatair);
router.patch("/:propreatairId" , updateproprietaire);
router.delete("/:propreatairId" , deletpropreataire);


// router.delete("/:propreatairId" , deletPropreatair );


module.exports = router;