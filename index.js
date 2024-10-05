import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Use fileURLToPath to resolve __dirname in ES modules
const home = fileURLToPath(import.meta.url);
const views = path.dirname(home);

// Set Pug as the view engine
app.set("view engine", "pug");

// Define the path to the views directory
app.set("views", path.join(views, "views"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

// Route for the home page
app.get("/", (req, res) => {
    res.render("home", { title: "Animal App", message: "submit a form or see an animal!" });
});

// Route for the form page
app.route("/form")
    .get((req, res) => {
        res.render("form", { title: "Form Page", message: "Contact us for vacation to Cameroon:" });
    })
    .post((req, res) => {
        // Here you can process the form data if needed
        // const formData = req.body; // Uncomment to access form data

        // Render the success page with a title
        res.render("success");
    });

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about');  
});


// downloading a static file
app.get('/button')

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
