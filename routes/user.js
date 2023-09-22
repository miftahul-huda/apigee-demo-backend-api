const CrudRouter = require("./crudrouter");

class UserRouter extends CrudRouter{

    static getRouter(logic)
    {
        let router = super.getRouter(logic);
        router.post("/login", (req, res)=>{
            let username = req.body.username;
            let password = req.body.password;
            logic.login(username, password).then((response)=>{
                res.send(response);
            }).catch((err)=>{
                res.send(err);
            });

        });

        return router;
    }

}

module.exports = UserRouter;