const notFound = (req,res)=>{
    res.status(403).json({message:"Route does not exist!"})
}

module.exports = notFound