//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');
const e = require("express");

const homeStartingContent = "A blog, also known as weblog, is a type of website that is like a diary or journal.Bloggers (a word for people who write on blogs) often write about their opinions and thoughts. They can be used for anything that involves communicating or publishing information on the World Wide Web. Common uses include teaching and educational and corporate use.Your blog can be a personal diary, a project collaboration tool, a guide, or any means of communicating and publishing information on the web.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
let posts=[];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.get("/", function (req, res) {
  

  res.render("home",{startingContent:homeStartingContent , posts:posts});
  
  // console.log(posts);
})

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent})
})

app.get("/posts/:postName",function(req,res){
  let requestedTitle=_.lowerCase(req.params.postName);
  // _.lowerCase(requestedTitle);

  posts.forEach(function(post){
    const storedTitle=_.lowerCase(post.title);
    if(requestedTitle === storedTitle )
    {
      res.render("post",{content:post.content ,title:post.title});
    }
    
  });

})

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent})
})


app.get("/compose",function(req,res){

  res.render("compose")
})

app.post("/compose",function(req,res){
  // let mstring=req.body.postBody
  // let con=
  const post={
    title:req.body.postTitle,
    content:req.body.postBody,
  };

  posts.push(post);
  res.redirect("/");
})









app.listen(3000, function () {
  console.log("Server started on port 3000");
});
