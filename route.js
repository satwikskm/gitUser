const app = angular.module('user',["ngRoute"])

// let page = 0
// let limit = 10
let count = 0

// defineing the routes

app.config(function ($routeProvider) {
    $routeProvider.when('/v1', {
        templateUrl: './view/baseView.html',
        controller: 'userDefine'
    })
})



// app.factory('api',function($http){

//     // defineing a factory object to store the factories
//     let factories = {}

//     // mantaining a record of page and results
    

//     // declaring data warehouse 
    
//     let userList = []

//     const loadUserData = async function(page){

//         let url = `https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=${page}&per_page=20`

//         // define a data store 

//         await $http.get(url).then((data)=>store=data)
        
//         let items = store['data'].items
//         items.map((x)=>{userList.push(x)})
        
//         return userList

//     }

    

//     factories.getUserData = function(page){
//         loadUserData(page)
//         return userList
//     }

//     return factories
// })

// Defineing the controllers

// let controllers = {}


// controllers.userDefine = ('userDefine',function($scope,api){

//     //Defineing a local data store
    
//     $scope.currentUserList

//     // Function call  for data loading 
//     let localStore = []
//     dataLoad = async function(page){
//         // console.log("click")
//         let data = await api.getUserData(page)
//         localStore = data
//         // console.log(localStore,"data")
//         $scope.currentUserList = localStore
//         console.log($scope.currentUserList,"cu")
        
        
//     }
//     console.log("call0")
   
//     // Primary Call for data loading 

//         dataLoad(1)
    
   


//     // OPtimising the scroll so a interlock is defined
    
//     let isNotExecuted = true


//     // Lazy loading implementation on Scroll
//     let call = 0
//     const entTrack = document.querySelector('.container')
//     console.log(entTrack)
//     let count = 1

    
//     window.onscroll=function(e){
//             console.log(document.body.offsetHeight)

//             if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && isNotExecuted) {
                
               
//                 count+=1
//                dataLoad(count)
                
//                 console.log(document.body.offsetHeight)
                
    
//             }
//             // Scroll End
//             if(count === 5){
//                 isNotExecuted=false
//                 document.querySelector('.end-note').innerHTML="You have reached the End"
        
//             }
    
    
//     }
    


// })

// app.controller(controllers)

