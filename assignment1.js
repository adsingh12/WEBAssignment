/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Akash Deep Singh     Student ID: 129597225      Date: May 20, 2023
*
********************************************************************************/ 

var serverVerbs = ["GET","GET","GET","POST","GET","POST"]
var serverPaths= ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses=["Welcome to WEB700 Assignment 1","This assignment was prepared by Akash Deep Singh","Akash Deep Singh: adsingh12@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function httpRequest(httpVerb,path) {

    for (let i = 0; i < 6; i++) {
        if (httpVerb == serverVerbs[i] && path == serverPaths[i]){
            return(`200: ${serverResponses[i]}`)      
        } 

    }
    return(`404: Unable to process ${httpVerb} request for ${path}`)
    
}

function automateTests(){
    var testVerbs=["GET","POST"]
    var testPaths=["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]
    function randomRequest(){
        randVerb=testVerbs[getRandomInt(1)]
        randPath=testPaths[getRandomInt(7)]
        
        console.log(httpRequest(randVerb,randPath))
        
    }
    setInterval(randomRequest,1000)

    
}


automateTests()
//console.log(httpRequest("GET","/"))
//console.log(httpRequest("GET","/about"))
//console.log(httpRequest("PUT","/"))
