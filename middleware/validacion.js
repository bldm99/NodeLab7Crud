




const  validacion = (x) => {
    let joivalidator = (res , req , next) => {
        let {error} = x.validate(req.body)
        console.log(error)  
        if(error){
            console.log("datos nos coinciden")
            res.render('index')

        }else{
            next()
        }
    }
    return joivalidator
}

const  v = (schema) => {
    let x = schema
    return x
}
module.exports = {
    validacion,
    v
}