import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
var listIsi = []
var works =[]

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("index.ejs", {isi : listIsi})
})

app.post("/post", (req,res)=>{
    var luaran = req.body["newItem"]
    listIsi.push(luaran)
    res.redirect("/")
})

app.get("/work", (req,res)=>{
    res.render("work.ejs", {isi : works})
})

app.post("/workpost", (req,res)=>{
    var kerja = req.body["newWork"]
    works.push(kerja)
    res.redirect("/work")
})

app.listen(port, ()=>{
    console.log(`running on ${port}`)
})