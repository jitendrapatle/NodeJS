const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/pathUtil');
const { error } = require('console');
// let registredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photo) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photo = photo;
    }
    save() {
        Home.fetchAllHome(registredHomes => {
            registredHomes.push(this);
            const dataFile = path.join(rootDir, 'data', 'data.json')
            fs.writeFile(dataFile, JSON.stringify(registredHomes), error => {
                console.log("Getting some error")
            })
        })

    }
    static fetchAllHome(callback) {
        const dataFile = path.join(rootDir, 'data', 'data.json')
        fs.readFile(dataFile, (err, data) => {
            // console.log("file rad", err, data);
            if (!err) {
                callback(JSON.parse(data))
            } else {
                callback([]);
            }

        })
    }
}