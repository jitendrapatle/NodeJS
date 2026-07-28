const Favourite = require("../models/favourites-model");
const Home = require("../models/home-model");

exports.getIndex = (req, res, next) => {
    const registredHomes = Home.fetchAllHome((registredHomes) => {
        res.render('store/index', { registredHomes: registredHomes, pageTitle: "Airbnb Home", currentPage: 'index' })
    })
    // res.sendFile(path.join(rootDir,'views','home.html'))

}
exports.getHomes = (req, res, next) => {
    Home.fetchAllHome((registredHomes) => {
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
exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites(favourites => {
        Home.fetchAllHome((registredHomes) => {
            const favHomes = registredHomes.filter(homes => favourites.includes(homes.id));
            res.render('store/favourite-list', {
                favHomes: favHomes,
                pageTitle: "Favourite List",
                currentPage: 'favourites'
            })
        })
    })

    // res.sendFile(path.join(rootDir,'views','home.html'))

}

exports.postAddToFavourite = (req, res, next) => {
    console.log("From add to favorite ", req.body);
    Favourite.addToFavourite(req.body.id, error => {
        if (error) {
            console.log("Error while marking Favourite")
        }
        res.redirect("/favourites")
    })
}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("At home details page ", homeId)
    Home.getHomeById(homeId, home => {
        if (!home) {
            res.redirect("/homes")
        } else {

            console.log("Home details found ", home)
            res.render('store/home-detail', {
                home: home,
                pageTitle: "Home details",
                currentPage: 'home'
            })
        }
    })
}
