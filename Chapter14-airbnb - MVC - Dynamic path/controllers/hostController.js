const Home = require("../models/home-model");
exports.getAddHome = (req, res, next) => {
    res.render('host/edit-home', { pageTitle: "Airbnb - Add Homes", 
        currentPage: 'hosthome',
    editing: false })
}

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';
    Home.getHomeById(homeId, home => {
        if (!home) {
            console.log("Home not found for editing")
            return res.redirect("/host/host-homes")
        }
        console.log(homeId, editing, home)
        res.render('host/edit-home', {
            home:home,
            pageTitle: "Airbnb - Edit Homes",
            currentPage: 'hosthome',
            editing: editing
        })
    })

}


exports.postAddHome = (req, res, next) => {
    const {houseName, price, location, rating, photoUrl } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl)
    home.save()
    res.redirect('/host/host-homes')
}
exports.postEditHome = (req, res, next) => {
    const { id, houseName, price, location, rating, photoUrl } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl)
    home.id = id;

    home.save()
    res.redirect('/host/host-homes')
}


exports.getHostHomes = (req, res, next) => {
    const registredHomes = Home.fetchAllHome((registredHomes) => {
        res.render('host/host-home-list', { registredHomes: registredHomes, pageTitle: "Host Home List", currentPage: 'host-homes' })
    })
}