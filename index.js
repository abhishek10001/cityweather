import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req, res)=>{
  
    res.render("index.ejs");
});

// app.get("/weather",async(req,res)=>{

//   const apiKey="b0e81291cde0d578a5e5c3cb0d581151";
// const city =req.query.city; // req.body.city  can be also used 
// // city is what we entered inthe search bar 
// console.log(" city is what we entered in the search bar :- ",city);

//   const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//   try {
    
//     const result= await axios.get(API_URL);
//     console.log(result.data);
//     res.render("second.ejs" , {content: result.data});
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
  
// });
app.get("/weather",async(req,res)=>{
  const API_URL ="https://api.openweathermap.org/data/2.5/";
  const apiKey="b0e81291cde0d578a5e5c3cb0d581151";
  try {
    const result=await axios.get(API_URL+"weather" , {
      params:{
        q:req.query.city,
        appid:apiKey,
units:`metric`,

      },
    });
console.log(result.data);
    res.render("second.ejs" , {content: result.data});
  } catch (error) {
    res.status(404).send(error.message);
  }

});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });