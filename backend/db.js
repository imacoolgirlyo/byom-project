const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/byom-project",
    {
        useNewUrlParser : true,
        useFindAndModify : false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log(" ✅ Connected to DB");
const handleError = error => console.log("❌ Error on DB Connection");

db.once("open", handleOpen);
db.on("error", handleError);