
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');
// const campground = require('../models/campground');
// mongoose.connect('mongodb://localhost:27017/yelp-camp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifinedTopology: true
// });
mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor( Math.random() * array.length )];

const seedDB = async () => {
    await Campground.deleteMany({});
    // const c = new Campground({ title: 'purple field' });
    // await c.save();

    for (let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author:'64ef11494ccd57a6b7711b17',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, quasi? Culpa dolorem laboriosam inventore sunt, reprehenderit porro incidunt aspernatur voluptates dolores consectetur eveniet, corporis ipsam placeat, harum sed pariatur sequi?',
            price,
             images: [
                {
                    url: 'https://res.cloudinary.com/dhieos79t/image/upload/v1694254210/YelpCamp/xnmtsogtai3nma2ekc1i.jpg',
                    filename: 'YelpCamp/xnmtsogtai3nma2ekc1i'
                }
            ]
        })
        await camp.save();
    }
}

seedDB();