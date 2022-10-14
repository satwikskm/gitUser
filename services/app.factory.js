(function(){
    

    var api = function($http){
        let factories = {}
        let userList = []
        const loadUserData = async function(page){

            let url = `https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=${page}&per_page=20`
    
            // define a data store 
    
            await $http.get(url).then((data)=>store=data)
            
            let items = store['data'].items
            items.map((x)=>{userList.push(x)})
            
            return userList
    
        }
        factories.getUserData = function(page){
            loadUserData(page)
            return userList
        }
    
        return factories


    }

    angular.module('user').factory('api',api)
    api.$inject = ['$http']
    
    

}());










// angular.module('user').service('api',function(){
//     let factories = {}
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