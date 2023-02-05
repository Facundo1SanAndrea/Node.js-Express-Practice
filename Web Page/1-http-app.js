const http = require("http");
const {readFileSync} = require("fs");

const homePage = readFileSync('./navbar-app/index.html')
const StylePage = readFileSync('./navbar-app/styles.css')
const AppPage = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((request, response) => {
    const url = request.url;
    //Home Page
    if (url === "/"){
    response.writeHead(200,{'content-type':'text/html'})
    response.write(homePage)
    response.end()
    } 
    // About Page
    else if (url === "/about.html") {
    response.writeHead(200,{'content-type':'text/html'})
    response.write('About Page')
    response.end()
    } 
    // Style Page
    else if (url === "/styles.css") {
        response.writeHead(200,{'content-type':'text/css'})
        response.write(StylePage)
        response.end()
    } 
    // App Page
    else if (url === "/browser-app.js") {
        response.writeHead(200,{'content-type':'text/javascript'})
        response.write(AppPage)
        response.end()
    } 
    //Error Page
    else {
    response.writeHead(404,{'content-type':'text/html'})
    response.write('<h1>Error Page not found</h1>')
    response.end()      
    }
})

server.listen(5000)
