 
 function impEach(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }

 function values(object){
 	var val ;
 		
 	impEach(object,function(element){
 		 val = Object.values(object)
 				
 	})


 	return val 
 }
  function keys(object){
 	var key ;
 		
 	impEach(object,function(element){
 		 key = Object.keys(object)
 				
 	})


 	return key  
 }


 function keysLongerThan(object , number){
 	var newObj = {}

 	impEach(object,function(element,key){
 		if(key.length >= number){
 			newObj[key] = element 
 		}   
 	})
 	return newObj
 }


 function incrementValues (object){
 	var newObj = {}

 	impEach(object,function(element,key){
 		if(typeof object[key] === 'number'){
 			newObj[key] = element + 1
 		}
 	})
 	return newObj
 }



var ex = {ages: [23, 44, {min: 1, max: 2}], people: {height: 'tall', eye_color: 'brown'}};


 function objectToArrayOrArrayToObject (coll){

      if(typeof coll === 'object'){
            impEach(coll,function(element,key){
                  if(Array.isArray(element)){
                        coll[element] = Object.assign({},element)
                  }
                  if(typeof(element)==='object'){
                        coll[element] = Object.entries(element)

                  }
            })

      }

      if(Array.isArray(coll)){
            impEach(coll,function(element,key){
                  if(typeof(element)==='object'){
                        coll[element] = Object.entries(element)
                  }
                  if(Array.isArray(element)){
                        coll[element] = Object.assign({},element)
                  }
            })
      }
      return coll 


 }

