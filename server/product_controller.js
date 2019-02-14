module.exports ={

    create:(req, res) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body
        dbInstance.create_product(name, description, price, image_url).then((response) => {
            res.status(200).send(response).catch((err) => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)})
            
        })
    },

    getAll:(req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then((response) => {
            res.status(200).send(response).catch((err) => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)})
        })
    },


    getOne:(req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.read_product(id).then((response) =>{
            if(response[0]){
                res.status(418).send(response[0])
            } else {res.sendStatus(404)}
        }).catch((err) => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)})
        
    },

    update:(req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        const {name, description, price, image_url} = req.body
        dbInstance.update_product(id, name, description, price, image_url).then((response) =>{
            res.status(200).send(response).catch((err) => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)})
        })
    },

    delete:(req, res) =>{
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_product(id).then((response) => {
            res.status(200).send(response).catch((err) => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)})
        })
    }
}


