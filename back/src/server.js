const http = require("http");
const data = require("./utils/data")
const PORT = 3001;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    const id = url.split("/").at(-1);
    if(url.includes("rickandmorty/character")){
      const character = data.find((element)=> element.id === id);
    }

}).listen(PORT,"localhost");