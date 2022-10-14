angular.module('user').controller('userDefine',function($scope,api){

    //Defineing a local data store
    
    $scope.currentUserList

    // Function call  for data loading 
    let localStore = []
    dataLoad = async function(page){
        // console.log("click")
        let data = await api.getUserData(page)
        localStore = data
        // console.log(localStore,"data")
        $scope.currentUserList = localStore
        console.log($scope.currentUserList,"cu")
        
        
    }
    console.log("call0")
   
    // Primary Call for data loading 

        dataLoad(1)
    
   


    // OPtimising the scroll so a interlock is defined
    
    let isNotExecuted = true


    // Lazy loading implementation on Scroll
    let call = 0
    const entTrack = document.querySelector('.container')
    console.log(entTrack)
    let count = 1

    
    window.onscroll=function(e){
            console.log(document.body.offsetHeight)

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && isNotExecuted) {
                
               
                count+=1
               dataLoad(count)
                
                console.log(document.body.offsetHeight)
                
    
            }
            // Scroll End
            if(count === 5){
                isNotExecuted=false
                document.querySelector('.end-note').innerHTML="You have reached the End"
        
            }
    
    
    }
    


})