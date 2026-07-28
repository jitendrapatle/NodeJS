const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/pathUtil');
const { error } = require('console');
// let registredHomes = [];

const dataFile = path.join(rootDir, 'data', 'data.json')
module.exports = class Home {
    constructor(houseName, price, location, rating, photo) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photo = photo;
    }
    save() {
        this.id = Math.random().toString();
        Home.fetchAllHome(registredHomes => {
            registredHomes.push(this);
            fs.writeFile(dataFile, JSON.stringify(registredHomes), error => {
                console.log("Getting some error")
            })
        })

    }
    static fetchAllHome(callback) {
        fs.readFile(dataFile, (err, data) => {
            // console.log("file rad", err, data);
             callback(!err ? JSON.parse(data) : []);
        })
    }

    static getHomeById(homeId,callback){
        this.fetchAllHome(home=>{
            const currentHome = home.find(home=>home.id === homeId);
            callback(currentHome)
        });
    }
}