const express = require('express')

const app = express()
const port = 7000;

app.use(express.static('templates'))
app.use(express.static('MoreTemplates'))

app.get('/', (req, res) => {
    res.status = 200;
    res.sendFile('templates/index.html', { root: __dirname })
    // res.send("Hello");
})

app.get('/About', (req, res)=>{
    res.status = 200;
    res.send("This is the About Page");
}).get('/Projects', (req, res)=>{   // Chaining Done here
    res.status = 200;
    res.send("This is the projects Page");
})
app.get('/More', (req, res)=>{
    res.status = 200;
    res.sendFile('MoreTemplates/More.html', {root: __dirname})
})

// app.get('/linkedin', (req, res) => {
//     // Perform any server-side logic if needed

//     // Redirect the user to the LinkedIn profile
//     res.redirect('https://www.linkedin.com/in/suprajit-dewanji-977618225');
// });

app.listen(port, () => {
    console.log(`App successfully ran on port-${port}`)
})