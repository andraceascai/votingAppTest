// // import express from 'express';
// // // import request from 'request'
// import axios from "axios"
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

// async function getUserInfo() {
//     const response = await fetch('https://voting-app-test.azurewebsites.net/.auth/me');
//     const payload = response;
//     const { clientPrincipal } = payload;
//     return clientPrincipal;
//   }
  
//   (async () => {
//   console.log(await getUserInfo());
//   })();

// axios.get('https://voting-app-test.azurewebsites.net/.auth/me').then(r=> console.log(r.data))
// import { XMLHttpRequest } from "xmlhttprequest";

// var req = new XMLHttpRequest();
// req.open('GET', 'https://voting-app-test.azurewebsites.net/.auth/me', true);
// req.send(null);
// req.onload = function() {
//   var headers = req.getAllResponseHeaders().toLowerCase();
//   console.log(headers);
// };



import express, { Router } from 'express';
import request from 'request';
const router =Router()

var app = express()
router.get('/', async function(req, res) {
 
 var token = req.headers["x-ms-token-aad-access-token"]
  
     getstuff(token).then(response => {
       console.log(response)
      res.json(response)
      })
      .catch(error => {
          res.send(error)
      })
    
  });
  
  var getstuff =  async function (token) {
    
    console.log("getting stuff");
    
   
var options = {
  'method': 'GET',
  'url': 'https://voting-app-test.azurewebsites.net/.auth/me',

  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ token
  }
};
console.log(options)
return new Promise(resolve => {
  request( options,  function (error, response, body) {
     if(!error){
       console.log(body)
      resolve(JSON.parse(body));


     }
        
  });
  
 
});

  }