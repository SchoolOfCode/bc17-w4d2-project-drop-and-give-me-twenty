import express from 'express';
import helmet from 'helmet';
const app = express();
const port = 3000

app.use(helmet());

app.get('/', function (req, res) {
    res.send("Hello World");
    console.log(req);
}
);

app.listen(3000, function () {
    console.log("I am on Port 3000");
});
