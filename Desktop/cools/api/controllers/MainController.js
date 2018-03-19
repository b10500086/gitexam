module.exports={
    add:  function(req,res){
        let data = {
            accountID: 'dd',
            nickName: 'da'
        }
        var result=  User.create(data);
        res.ok(result);
    },
    findAll:function(req,res){
        var result = User.findAll();
        res.ok(result);
    },
}