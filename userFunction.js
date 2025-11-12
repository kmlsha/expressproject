
let userAdd  = async(req,res) => {
    let vla = ""
    if (req.query.data == 'ss') {
        vla = "kk"
    }

    return res.send({
        status:0,
        data:vla
      })
    
}
let orderView  = async(req,res) => {
    let vla = ""
    if (req.query.data == 'ss') {
        vla = "kk"
    }

    return res.send({
        status:0,
        data:vla
      })
    
}

let userEdit  = async (req,res) => {
let array = [];
let str = "name";


for (let i = 0; i < req.body.count; i++) {
    // const element = array[i];
    str += i
    console.log(str);
}
    return res.send({
        status:0,
        data:""
      })
    
}

export {userAdd,userEdit,orderView};