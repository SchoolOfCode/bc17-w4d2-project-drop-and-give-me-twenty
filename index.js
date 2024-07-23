import express from 'express';
import helmet from 'helmet';
const app = express();
const port = 3000

// Using the helmet middleware package
app.use(helmet());

// Root level get request handler
app.get('/', function (req, res) {
    res.send("Hello World");
    // log request to console
    console.log(req);
}
);

// open up listening on port 3000
app.listen(3000, function () {
    console.log("I am on Port 3000");
});
