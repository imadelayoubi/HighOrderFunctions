 function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }

  var obj = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 

 function ages(object) { 
       return map(object, function(person) { 
             return person.age;}); 
 }

 function firstName(object){
      
      return map(object,function(person){
            return  person.name.first 
        
      })
 }

 function lastName(object){
      return map(object,function(person){
            return person.name.last
      })
 }


 function fullName(object){
      return map(object,function(person){
            return (person.name.first +' '+ person.name.last) 
      })
 }

 function abs(x) { 
       if (x >= 0) { 
             return x; 
       } 
       return -x; 
 }
 // map([1, -2, 37, -100, -8, 5], abs)

function max (numbers){
      var maxNum = numbers[0]
      each(numbers,function(element){
            if(maxNum<element){
                  maxNum = element
            }
      })
      return maxNum
}


function maximums(array){
      return map(array,max)        
}


 function exponentials(numbers) { 
       return map(numbers,function(element){ 
             return Math.pow(element,element); 
       }); 
 }


 function reverse(string){
      var reversedString = '';      
      for (var i = string.length -1 ; i >=0 ; i--){
            reversedString += string[i]
      }
      return reversedString   
 }
 // 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

// function guess(array){

//       return map(array,function(element,i){
//             if(element[i].length === )
//       })
// }

// improved map 


 function impMap(coll, f) { 
       var acc = []; 
       if(!Array.isArray(coll)){
            acc = {};
       }
       each(coll, function(element, key) { 
             acc[key] = f(element, key); 
       }); 
       return acc; 
 }


function incrementValues (object){

      return impMap(object,function(element,key){
            if(typeof object[key] !== 'number'){
                  return object[key]
            }else{
                  return object[key] + 1   
            }
      })
}

function toUpperCaseValues(object){

      return impMap(object,function(element,key){
              if(typeof object[key] !== 'string'){
                  return object[key]
            } else {
               return object[key].toUpperCase()
            }
      })
}

function countNestedKeys (object) {
      return impMap(object,function(element,key){
            if(typeof object[key] === 'object'){
                  return Object.keys(object[key]).length
                                     
            }
      })
}

function agesToMinutes(array){
      return impMap(array,function(element,key){
            // var newAge = element.age * 365 * 24
            var obj = element
            obj.age = obj.age*365*24*60
            return obj
      })
}





