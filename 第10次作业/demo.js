let fs=require('fs')
let path=require('path')
let http=require('http')
let server=http.createServer((req,res)=>{
    const url=req.url
    let fpath=''
    if(url=='/'){
      fpath= path.join(__dirname,'../../winter-work/creator/creator-home/creator-home.html')
    }else {
        fpath=path.join(__dirname,'../../winter-work/creator/creator-home',url)
    }


    fs.readFileSync(fpath,'utf-8',function(err,dataStr){
      if(err){
        res.end('errooo')
      }else{
        res.end('yes')
      }
    })
    
})
server.listen(5500,()=>{
  console.log('server running at http://127.0.0.1:5500')
})
