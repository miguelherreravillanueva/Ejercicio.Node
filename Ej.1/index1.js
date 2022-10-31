let http = require("http");

const servidor = http.createServer((req, res) =>{
res.writeHead(200, { "Content-Type": "text/html" });
res.end("Mi primer script en The Bridge sssiiuuuuu!!!");
})

const puerto = 8080;

servidor.listen(puerto,()=>{
    console.log(`Servidor escuchando en el puerto ${puerto}`)
});