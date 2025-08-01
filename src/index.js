 import dotenv from "dotenv";
 import connectDb from "./config/db.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

connectDb()
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log(`Server is running at port :${process.env.PORT}`);
        
    })

})
.catch((error) =>{
    console.log('mongoDb connection failed!!', error);
    
})
