const {readFile,writeFileSync, writeFile}= require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }

  const first  = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
      if(err){
          console.log(err)
          return;
      }
      const second = result;
      writeFile('./content/reuslt-async.txt',
      `Here is the result:${first},${second}`
    ,(err,result)=>{
      if(err){
          console.log(err)
          return;
          console.log(result)
      }  
    }  )
  })
})
