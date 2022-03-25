


function find (array){
   
    
    var  number = array[0]
   
    for (let index = 0; index < array.length; index++) {
       
        if( array[index] < number  ){
          
             number = array[index];
             
        }
    //        else  if( array[index] > numbertwo  ){
          
    //         numbertwo = array[index];
            
    //    }
        

        
    }
    return number ;
     
}
;
console.log(find([9, 3, 9, 5, 4, 6]));

