import string from './css.js'
let n=1
demo.innerText=string.substr(0,n)//页面显示文字
demo2.innerHTML=string.substr(0,n)//显示样式
// console.log(n)

let time=100
const run=()=>{
    n+=1
    if(n>string.length){
       window.clearInterval(id)
       return 
    }
    console.log(n+''+string.substr(0,n))
    demo.innerText=string.substr(0,n)
    demo2.innerHTML=string.substr(0,n)
    demo.scrollTop=demo.scrollHeight
}

   const play=()=>{
       return setInterval(run,time) 
   }
   const pause=()=>{
    window.clearInterval(id)
   }
   let id=play()
   btnPause.onclick=()=>{
       pause()
   }
   btnPlay.onclick=()=>{
    id=play()
   }
   btnSlow.onclick=()=>{
       pause()
       time=300
       id=play()
   }
   btnNormal.onclick=()=>{
       pause()
       time=100
       id=play()
   }
   btnFast.onclick=()=>{
       pause()
       time=0
       id=play()
   }