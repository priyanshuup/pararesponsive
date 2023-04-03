const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 9000;

const staticPath = (path.join(__dirname,"../public"))
console.log(staticPath)
const templatePath = path.join(__dirname,"../templates/views")
console.log(templatePath)


// middleware 
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))

app.set("view engine","ejs")
app.set("views", templatePath)


app.get("/",(req,res)=>{
    res.render("index")
})

// app.get("/contact",(req,res)=>{
//     res.render("contact")
// })

app.get("/gallery",(req,res)=>{
    res.render("gallery")
})

app.get("/music",(req,res)=>{
    res.render("music")
})

app.get("/shop",(req,res)=>{
    res.render("shop")
})

app.get("/videos",(req,res)=>{
    res.render("videos")
})

app.get("*",(req,res)=>{
    res.render("404",{
        showerror:"Page not found ! 404 error"
    })
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})