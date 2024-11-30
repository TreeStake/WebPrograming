const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {Schema} = require('mongoose');
const jwt = require('jsonwebtoken')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, "SECRET_KEY_RANDOM", {expiresIn: '100h'})
}

const UserSchema = new Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    orders: [
        {
            movieId: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            amount: { type: Number, required: true },
            time: { type: String, required: true },
            maxAmount: { type: Number, required: true },
        }
    ]
})

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, "SECRET_KEY_RANDOM");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token." });
    }
};

const User = mongoose.model('User', UserSchema);

const MovieSchema = new Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    imdbReviews: { type: Number, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true }
});

const Movie = mongoose.model('Movie', MovieSchema);

const seedMovies = async () => {
    try {
        const movies = [
            { _id: 1, title: "Inception", duration: 148, imdbReviews: 2100000, price: 150, img: "inseption.jpg" },
            { _id: 2, title: "The Dark Knight", duration: 152, imdbReviews: 2500000, price: 220, img: "thedarknight.jpg" },
            { _id: 3, title: "Interstellar", duration: 169, imdbReviews: 1600000, price: 300, img: "interstellar.jpg" },
            { _id: 4, title: "The Matrix", duration: 136, imdbReviews: 1700000, price: 180, img: "thematrix.jpg" },
            { _id: 5, title: "The Shawshank Redemption", duration: 142, imdbReviews: 2700000, price: 250, img: "shawshank.jpg" },
            { _id: 6, title: "Pulp Fiction", duration: 154, imdbReviews: 1900000, price: 210, img: "pulpfiction.jpg" },
            { _id: 7, title: "Fight Club", duration: 139, imdbReviews: 1900000, price: 190, img: "fightclub.jpg" },
            { _id: 8, title: "Forrest Gump", duration: 142, imdbReviews: 2000000, price: 240, img: "forrestgump.jpg" },
            { _id: 9, title: "The Godfather", duration: 175, imdbReviews: 1700000, price: 280, img: "thegodfather.jpg" },
            { _id: 10, title: "The Lord of the Rings", duration: 178, imdbReviews: 1700000, price: 300, img: "lordoftherings.jpg" }
        ];

        const existingMovies = await Movie.find();
        if (existingMovies.length === 0) {
            await Movie.insertMany(movies);
            console.log("Фільми успішно додані до бази даних");
        } else {
            console.log("Фільми вже існують у базі даних");
        }
    } catch (error) {
        console.error("Помилка при додаванні фільмів:", error);
    }
};

const start = async() => {
    try {
        await mongoose.connect();
        console.log("Підключено до бази даних");
        await seedMovies(); // Додавання фільмів
        app.listen(PORT, () => console.log(`Сервер запущено на http://localhost:${PORT}`));
    } catch (error) {
        console.error("Помилка підключення до бази даних:", error);
    }
}

class AuthController {
    async registration(req, res){
        try{
            const {username, password} = req.body
            const customer = await User.findOne({username})
            if (customer){
                return res.status(400)
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({username, password: hashPassword})
            await user.save()
            return res.json({message: 'Користувач зареєстрований'})
        }catch (e){

        }
    }
    async login(req, res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})

            if (!user){
                return res.status(400).json({message: 'User not found'})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if (!validPassword){
                return res.status(400).json({message: 'Wrong password'})
            }

            const token = generateAccessToken(user._id)
            return res.json({token})
        }catch (e){
            
        }
    }
    async getUsers(req, res){
        try{
            const users = User.find()
            res.json(users)
        }catch (e){
            
        }
    }
}

const authController = new AuthController();

app.post('/cart', authenticateToken, async (req, res) => {
    const { movieId, title, price, amount, time, maxAmount } = req.body;

    console.log(req.body);

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingOrder = user.orders.find(order => order.movieId === movieId && order.time === time);

        if (existingOrder) {
            if (existingOrder.amount + amount <= existingOrder.maxAmount) {
                existingOrder.amount += amount;
            } else {
                return res.status(400).json({ message: `Cannot order more than ${existingOrder.maxAmount}` });
            }
        } else {
            user.orders.push({ movieId, title, price, amount, time, maxAmount });
        }

        await user.save();
        res.json(user.orders);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/cart', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user.orders);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.delete('/cart', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.orders = [];
        await user.save();

        res.json({ message: "Cart cleared" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.patch('/cart/:orderId/increment', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const order = user.orders.find(order => order._id.toString() === req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (order.amount >= order.maxAmount) {
            return res.status(400).json({ message: "Cannot add more than max amount" });
        }

        order.amount += 1;
        await user.save();

        res.status(200).json({ message: "Order incremented", orders: user.orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.patch('/cart/:orderId/decrement', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const orderIndex = user.orders.findIndex(order => order._id.toString() === req.params.orderId);
        if (orderIndex === -1) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (user.orders[orderIndex].amount > 1) {
            user.orders[orderIndex].amount -= 1;
        } else {
            user.orders.splice(orderIndex, 1);
        }

        await user.save();

        const updatedUser = await User.findById(req.user.id);
        res.status(200).json({ message: "Order decremented or removed", orders: updatedUser.orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.post('/register', (req, res) => authController.registration(req, res));

app.post('/login', (req, res) => authController.login(req, res))

app.get('/users', (req, res) => authController.getUsers(req, res));

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Помилка отримання фільмів' });
    }
});

app.get('/movies/sorted', async(req, res) => {
    const { search, sort, filterPrice, filterViews } = req.query;

    try {
        let query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        if (filterPrice === 'up to 200') {
            query.price = { $lt: 200 };
        } else if (filterPrice === 'more then 200') {
            query.price = { $gte: 200 };
        }

        if (filterViews === 'more then 2000000') {
            query.imdbReviews = { $gte: 2000000 };
        } else if (filterViews === 'up to 2000000') {
            query.imdbReviews = { $lt: 2000000 };
        }

        let movies = await Movie.find(query);

        if (sort === 'price') {
            movies = movies.sort((a, b) => a.price - b.price);
        } else if (sort === 'views') {
            movies = movies.sort((a, b) => b.imdbReviews - a.imdbReviews);
        } else if (sort === 'duration') {
            movies = movies.sort((a, b) => a.duration - b.duration);
        }

        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Помилка обробки запиту' });
    }
});

app.get('/movies/:id', async(req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ error: 'Фільм не знайдено' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Помилка отримання фільму' });
    }
  });

start()