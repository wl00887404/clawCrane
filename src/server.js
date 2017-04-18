// server.js
var express = require('express')
var path = require('path')

var compression = require('compression')
var bodyParser = require('body-parser')

//var data = require("./database.js")
// { storeList, user, machineList, data, errorLog }
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { match, RouterContext } from 'react-router'
// import routes from 'routes'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

var app = express()

app.use(compression())
app.use(bodyParser.json())

app.use(express.static('public'))



app.get(/.*[^.js]$/, (req, res) => {
    // //match the routes to the url
    // console.log("match:\t" + req.url)
    // match({ routes: routes, location: req.url }, (err, redirect, props) => {
    //     if (err) {
    //         // there was an error somewhere during route matching
    //         res.status(500).send(err.message)
    //     } else if (redirect) {
    //         // we haven't talked about `onEnter` hooks on routes, but before a
    //         // route is entered, it can redirect. Here we handle on the server.
    //         res.redirect(redirect.pathname + redirect.search)
    //     } else if (props) {
    //         // if we got props then we matched a route and can render

    //         const appHtml = renderToString(<RouterContext {...props}/>)
    //         res.send(renderPage(appHtml))
    //             //res.send("hello world");
    //     } else {
    //         // no errors, no redirect, we just didn't match anything
    //         res.status(404).send('Not Found')
    //     }
    // })
    res.send(renderPage());
})

function renderPage(appHtml = "") {
    return 
        `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Bolong 即時數位資訊站</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
            <div id="root">${appHtml}</div>
            <script type="text/javascript" src="/bundle.js"></script>
        </body>
        </html>`
}

var PORT = process.env.PORT || 8888
app.listen(PORT, function() {
    console.log('express server running at localhost:' + PORT)
})
