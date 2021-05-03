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

function filter (array,predicate){
      var acc = []
      each(array,function(element){
            if(predicate(element)){
                  acc.push(element);
            }
      });
      return acc ; 
}

function impFilter(array,predicate){
      var acc = []
      each(array,function(element,index){
            if(predicate(element,index)){
                  acc.push(element)
            }
      })
      return acc ; 
}


function superFilter(coll,predicate){
      var acc = []
       if(!Array.isArray(coll)){
            acc = {}
      }
      each(coll,function(element,key){
            if(predicate(element,key)){
                  if(Array.isArray(coll)){
                        acc.push(element)  
                        }
             else{
                 acc[key] = element ;
             }                 
      }
 })
      return acc;
}
function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }

// 1
function evens(array){

      return filter(array,function(number){
            return number % 2 === 0 
      })
}

function multiplesOfThree (array) {

      return filter(array,function(number){
            return number % 3 === 0
      })
}


function positives (array) {

      return filter(array,function(number){
            return number > 0 
      })
}


function evenLength (array){

      return filter(array,function(string){
            return string.length % 2 === 0 
      })
}

// More Practice

// 1

function odds(array){
      return filter(array,function(number){
            return number % 2 !== 0 
      })
}

function negatives (array) {
      return filter(array,function(number){
            return number < 0 
      })
}

function largerThanSix(array){
      return filter(array,function(number){
            return number > 6 
      })
}


function startsWithChar(strings,character){
      return filter(strings,function(element){
            return element.startsWith(character)
      })
}


function evenIndexedEvenLengths (array){
      return impFilter(array,function(element,index){
            return element.length % 2 === 0 && index % 2 === 0 
      })
}


function filterValues(object){
      return superFilter(object,function(element,key){
            return typeof element === 'number'
      })
}

function moveZero(coll){
   var arr3 = [];
   var arr1 = superFilter(coll,function(element,key){
            return element === 0 ;
             
      });
   var arr2 = superFilter(coll,function(element,key){
            return element !== 0 ;
             
      })
      return arr3 = arr2.concat(arr1)     
}

// function improvePassword(array){ 

// 	return impFilter(array,function(element,key){
// 		return element.user.password.length > 8
// 	})
// }

 


 function product(numbers){
      return reduce(numbers,function(total,number){
            return total * number;
      },1)
 }


 function averageAge(array){
      return reduce(array,function(total,element){
            return total+(element.age/array.length)
      },0)
 }
 function range(start, end) { 
       var acc = []; 
       for (var i = start; i <= end; i++) { 
             acc.push(i); 
       } 
       return acc; 
 }
// function factorialimp(number){
// 	var nums = []
// 	for ( var i = 1 ; i <= number ; i++){
// 		nums.push(i)
// 	}
// 	return reduce(nums , function(total,element){
// 		return total*element 
// 	},1)
// }

 function factorial (number) {
      // var nums = range(1,number)
      
      return reduce(range(1,number),function (total,element){
            return total*element
      },1) 

      
 }

  function impReduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }

 function impFactorial(number){

 return impReduce(range(1,number),function(total,element){
 		return total*element
 	})
 }


 function max(array){

 	return impReduce(array,function(max,element){
 		if(max < element){
 		   max = element 
 		}
 		   return max 
 	});
 }
//   function max(array) {
//     return impReduce(array, function(total, element) {
//         if (total < element) {
//             total = element;
//         }
//     return total;
//     });
// }
 function impRange(start, end) {
    if (end === undefined) {
    end = start;
    start = 0;
    }
    var acc = [];
    for (var i = start; i < end; i++) {
        acc.push(i);
}
    return acc;
}

function reduceGeneral(coll, f, acc) {
    if (acc === undefined) {
        if (Array.isArray(coll)) {
            acc = coll[0];
            coll = coll.slice(1);
        } else {
            var key = Object.keys(coll)[0]
            acc = coll[key];
            delete coll[key];
        }
    }

each(coll, function(element, i) {
    acc = f(acc, element, i);
});
    return acc;
}


function isEven(numbers){
	return impReduce(numbers,function(acc,num){
		return acc && num%2 === 0
	})
}