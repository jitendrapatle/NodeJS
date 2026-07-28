const Home = require("../models/home-model");
exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','user.html'))
    res.render('host/add-home', { pageTitle: "Airbnb - Add Homes", currentPage: 'addhome' })
}


exports.postAddHome = (req, res, next) => {
    const { houseName, price, location, rating, photo } = req.body;
    const home = new Home(houseName, price, location, rating, photo)
    home.save()
    res.render('host/home-added', { pageTitle: "Airbnb - Home added", currentPage: 'home-added' })
}
exports.getHostHomes = (req, res, next) => {
    const registredHomes = Home.fetchAllHome((registredHomes) => {
        res.render('host/host-home-list', { registredHomes: registredHomes, pageTitle: "Host Home List", currentPage: 'host-homes' })
    }) 

}