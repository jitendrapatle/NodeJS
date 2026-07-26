const Home = require("../models/home-model");

exports.getIndex = (req, res, next) => {
    const registredHomes = Home.fetchAllHome((registredHomes) => {
        res.render('store/index', { registredHomes: registredHomes, pageTitle: "Airbnb Home", currentPage: 'index' })
    })
    // res.sendFile(path.join(rootDir,'views','home.html'))

}
exports.getHomes = (req, res, next) => {
    const registredHomes = Home.fetchAllHome((registredHomes) => {
        res.render('store/home-list', { registredHomes: registredHomes, pageTitle: "Home List", currentPage: 'home' })
    })
    // res.sendFile(path.join(rootDir,'views','home.html'))

}
exports.getBookings = (req, res, next) => { 
        res.render('store/bookings', {  
            pageTitle: "Airbnb Bookings", 
            currentPage: 'bookings' 
        })
}
exports.getFevouriteList = (req, res, next) => { 
        res.render('store/fevourite-list', {  
            pageTitle: "Fevourite List", 
            currentPage: 'favourites' 
        })
}