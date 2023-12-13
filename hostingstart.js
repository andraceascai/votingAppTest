// // import express from 'express';
// // // import request from 'request'

// // const router = express.Router()

// // // console.log("router and friends")

// // router.get('/', async function(req, res) {
 
// //     var token = req.headers["x-ms-token-aad-access-token"]
     
// //         getstuff(token).then(response => {
// //           console.log(response)
// //          res.json(response)
// //          })
// //          .catch(error => {
// //              res.send(error)
// //          })
       
// //      });
// import express, { Router } from 'express';
// import request from 'request';
// const router =Router()

// var app = express()
// router.get('/', async function(req, res) {
 
//  var token = req.headers["x-ms-token-aad-access-token"]
  
//      getstuff(token).then(response => {
//        console.log(response)
//       res.json(response)
//       })
//       .catch(error => {
//           res.send(error)
//       })
    
//   });
  
//   var getstuff =  async function (token) {
    
//     console.log("getting stuff");
    
   
// var options = {
//   'method': 'GET',
//   'url': 'https://voting-app-test.azurewebsites.net/.auth/me',
// };
// console.log(options)
// return new Promise(resolve => {
//   request( options,  function (error, response, body) {
//      if(!error){
//        console.log(body)
//       resolve(JSON.parse(body));
//      }else console.log('error')
        
//   });
// });

//   }

async function getUserInfo() {
    const response = await fetch('https://voting-app-test.azurewebsites.net/.auth/me');
    const payload = response;
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }
  
  (async () => {
  console.log(await getUserInfo());
  })();