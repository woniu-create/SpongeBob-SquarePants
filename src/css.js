const string=`
  .face {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 60px auto;
    width: 460px;
    height: 400px;
    text-align: center;
    background-color: rgba(253, 219, 33, 1);
  }
  .eyes {
    position: relative;
    top: 10%;
    display: inline-block;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 3px solid #000;
    background: white;
    -webkit-animation: blink forwards infinite 6s ease-in-out;
              animation: blink forwards infinite 6s ease-in-out;
  }
  .eyes::after {
    position: absolute;
    top: 28%;
    left: 30%;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #000;
    background: #0099ff;
    display: block;
  }
  .eyes::before {
    z-index: 1;
    position: absolute;
    top: 40%;
    left: 42%;
    content: "";
    width: 25px;
    height: 25px;
    background: black;
    border-radius: 50%;
  }
  .eyesbrow {
    position: absolute;
    top: -40px;
    left: 66px;
    height: 40px;
    width: 10px;
    background-color: #000;
  }
  .eyesbrow::after {
    content: "";
    display: block;
    position: absolute;
    top: 18px;
    left: -56px;
    height: 40px;
    width: 10px;
    background: #000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .eyesbrow::before {
    content: "";
    display: block;
    position: absolute;
    top: 18px;
    left: 60px;
    height: 40px;
    width: 10px;
    background: #000;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .blush-group {
    position: absolute;
    top: 20%;
    width: 460px;
  }
  .nose {
    position: absolute;
    left: 43%;
    width: 50px;
    height: 90px;
    border-radius: 70%;
    border: 3px solid #000;
    background-color: rgba(253, 219, 33, 1);
    /* z-index: 1; */
  }
  .nose::after {
    content: "";
    position: absolute;
    top: 66%;
    left: -9%;
    background-color: rgba(253, 219, 33, 1);
    /* border: 5px solid black; */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* z-index: 1; */
  }
  /* 分割线 */
  
  .blush {
    position: absolute;
    margin-top: 20px;
    border: 3px solid rgb(215, 60, 18);
    border-radius: 50px;
    width: 76px;
    height: 76px;
    background-color: rgba(253, 219, 33, 1);
    /* z-index: 9999; */
  }
  .blush::after {
    content: "";
    position: absolute;
    top: 40%;
    left: -5px;
    width: 80px;
    height: 60px;
    background-color: rgba(253, 219, 33, 1);
    border-radius: 50%;
    transform: rotate(-60deg);
    /* border: 5px solid black; */
    /* z-index: 9999; */
  }
  .blush::before {
    content: "";
    position: absolute;
    top: 51%;
    left: 60%;
    width: 20px;
    height: 40px;
    background-color: rgba(253, 219, 33, 1);
    /* z-index: 9999; */
  }
  .blush-group .blush.left {
    left: 15%;
  }
  .blush-group .blush.right {
    right: 15%;
  }
  .freckless {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 15%;
    top: 30%;
    background-color: rgb(215, 60, 18);
    border-radius: 50%;
    /* z-index: 9999; */
  }
  .freckless::after {
    content: "";
    display: block;
    position: absolute;
    left: 45px;
    width: 8px;
    height: 8px;
    background-color: rgb(215, 60, 18);
    border-radius: 50%;
    z-index: 1;
  }
  .freckless::before {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    top: -15px;
    width: 8px;
    height: 8px;
    background-color: rgb(215, 60, 18);
    border-radius: 50%;
    /* z-index: 1; */
  }
  .mouth-group {
    position: absolute;
    width: 460px;
    height: 120px;
    /* z-index: 1; */
  }
  .mouth-group .lips {
    position: absolute;
    top: -68px;
    left: 15%;
    width: 330px;
    height: 120px;
    border: 3px solid black;
    border-color: #000 transparent transparent transparent;
    border-radius: 50%/100px 100px 0 0;
    transform: rotate(180deg);
  }
  .mouth-group .lips::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 12px;
    width: 20px;
    height: 20px;
    border: 3px solid transparent;
    border-left: 3px solid #000;
    transform: rotate(30deg);
  }
  .mouth-group .lips::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border: 3px solid transparent;
    border-left: 3px solid #000;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
  .tooth{
      position: absolute;
      top: -10px;
      left: 40%;
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 5px;
      transform: rotate(5deg);
      border: 3px solid #000;
  }
  .tooth.left{
      top: 48px;
      left: 40%;
  }
  .tooth.right{
      top: 48px;
      left: 52%;
      transform: rotate(-5deg);
  }
  .chin {
      position: absolute;
      left: 36%;
      top: 100%;
      width: 80px;
      height: 50px;
      border-radius: 45%;
      border: 5px solid rgb(215,60,18);
  }
  .chin {
      position: absolute;
      left: 36%;
      top: 82%;
      width: 80px;
      height: 32px;
      border-radius: 45%;
      border: 4px solid rgb(215,60,18);
  }
  .chin::after {
      content: '';
      position: absolute;
      left: 92%;
      top: -30%;
      width: 80px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid rgb(215,60,18);
  }
  .chin::before{
      content: '';
      position: absolute;
      left: -10%;
      top: -45%;
      background-color: rgba(253,219,33,1);
      width: 162px;
      height: 28px;
    z-index: 1;
  } 
  .suit-group {
      position: absolute;
      top: 80%;
      width: 460px;
      height: 180px;
      background-color: #fff;
      border: 3px solid #000;
  }
  .suit-group .triangle {
      display: inline-block;
      border-bottom: 50px solid #000;
      border-right: 30px solid transparent;
      border-left: 30px solid transparent;
      transform: rotate(180deg);
      margin-left: 45px;
      margin-right: 45px;
  }
  .suit-group .triangle::after{
      content: '';
      position: absolute;
      top:10px;
      right: -25px;
      border-bottom: 40px solid #fff;
      border-right: 25px solid transparent;
         border-left: 25px solid transparent;
  }
  .suit-group .tie{
      position: absolute;
      left: 41.5%;
      top: 0;
      width: 100%;
      height: 100px;
  }
  .suit-group .tie-top{
      box-sizing: content-box;
      position: relative;
      left: 3px;
      width: 25px;
      height: 0;
      border: 25px solid rgba(0,0,0,0);
      border-bottom: 0 solid;
      border-top: 40px solid #000;
    z-index: 10;
  }
  .suit-group .tie-top::after{
      content: '';
      box-sizing: content-box;
      position: absolute;
      top: -40px;
      right: -18px;
      width: 25px;
       height: 0;
      border: 18px solid rgba(0,0,0,0);
      border-bottom: 0 solid;
      border-top: 35px solid red;
  }
  .suit-group .tie-bottom-inner {
      width: 0;
      height: 0;
      border: 32px solid transparent;
      border-bottom: 60px solid black;
      position: relative;
      top: -70px;
    right: -8px;
      z-index: 2;
  } 
  .suit-group .tie-bottom-inner::after {
      content: '';
      position: absolute;
      left: -31px; 
      top: 60px;
      width: 0;
      height: 0;
      border: 32px solid transparent;
      border-top: 72px solid black;
  }
  .suit-group .tie-bottom-out {
      width: 0;
      height: 0;
      border: 25px solid transparent;
      border-bottom: 55px solid red;
      position: absolute;
      top: -18px;
      left: 15.78px;
      z-index: 5;
  }
  .suit-group .tie-bottom-out::after {
      content: '';
      position: absolute;
      left: -25px; 
      top: 55px;
      width: 0;
      height: 0;
      border: 25px solid transparent;
      border-top: 60px solid red;
  } 
  .pants {
      position: absolute;
      top: 88px;
      background-color: rgb(187,120,49);
      width: 100%;
      height: 50%;
      border-top: 3px solid #000;
  }
  .pants .belt {
      margin: 40px auto;
      max-width: 6--0px;
      border-top: 16px dashed #000;
      border-bottom: none;
      padding: 0;
  }
  .pore {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(174,172,12);
  }
  .pore {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgb(174,172,12);
  }
  
  .pore-01 {
      width: 50px;
      height: 50px;
      bottom: 140px;
      left: 20px;
  }
  
  .pore-02 {
      width: 50px;
      height: 50px;
      bottom: 30%;
      right: 50px;	
  }
  
  .pore-03 {
      width: 20px;
      height: 20px;
      bottom: 50%;
      left: 20px;
  }
  
  .pore-04 {
      width: 50px;
      height: 50px;
      left: 5px;
  }
  
  .pore-05 {
      width: 20px;
      height: 20px;
      top: 5%;
      right: 10px;
  }
  
  .pore-06 {
      width: 30px;
      height: 30px;
      top: 20%;
      left: 20px;
  }
  
  .pore-07 {
      width: 20px;
      height: 20px;
      bottom: 22%;
      right: 40px;
  }
  @-webkit-keyframes blink { 
      0%, 2%, 60%, 62%, 100% { 
          -webkit-transform: scaleX(1) scaleY(1); 
                  transform: scaleX(1) scaleY(1); 
      } 
      1%, 61% { 
          -webkit-transform: scaleX(1.5) scaleY(0.1); 
                  transform: scaleX(1.5) scaleY(0.1); 
      } 
    }
    
    @keyframes blink { 
      0%, 2%, 60%, 62%, 100% { 
          -webkit-transform: scaleX(1) scaleY(1); 
                  transform: scaleX(1) scaleY(1); 
      } 
      1%, 61% { 
          -webkit-transform: scaleX(1.5) scaleY(0.1); 
                  transform: scaleX(1.5) scaleY(0.1); 
      } 
    }
`
export default string