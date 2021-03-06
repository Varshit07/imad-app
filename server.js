var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined')); 

var articles = {
    'article-one': {
    title: 'Varshit\'s Article One',
    heading: 'Article One',
    date: 'Aug 15, 2017',
    content:` <p>
                This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. 
                This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one.
            </p>
            <p>
                This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one.
            </p>
            <p>
                This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. 
            </p>
            <p>
                This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. This is the content on article one. 
            </p>`
    },
    'article-two': {
        title: 'Varshit\'s Article Two',
        heading: 'Article Two',
        date: 'Aug 15, 2017',
        content: `<p>
                This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. 
            </p>
            <p>
                This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. This is the content of article two. 
            </p>`
    },
    'article-three': {
        title: 'Varshit\'s Article Three',
        heading: 'Artcle Three',
        date: 'Aug 15, 2017',
        content: `<p>
                This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. 
                </p>
                <p>
                This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. 
                </p>
                <p>
                This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. This is the content on Article 3. 
                </p>`
    }
};
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html lang="en">
        <head>
          <title>
               ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
         </head>
         <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <div>
                <h3>${heading}</h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req,res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js')) ;
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
