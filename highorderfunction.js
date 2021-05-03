 var cube  = function (x) { 
       return x * x * x; 
 } 

 var fullName =  function (first, last) { 
       return first + ' ' + last; 
 } 

 var power = function (base, exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp - 1); 
 } 

var sumCubes =  function (numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }

  function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i]); 
       } 
 }

var square = function (x){
	return x*x
}

var sumSquares = function(numbers){
	var total = 0 
	 each(numbers , function(number){
	total = total + square(number) ;
});		
	return total
}

var sumCubes1 =  function (numbers) { 
       var total = 0; 
       each(numbers,function(number){
       	total = total + cube(number)
       })
       return total; 
 }

var product = function (array){
	var result = 1
	for ( var i = 0 ; i < array.length ; i++){
		result = result * array[i]
	}
	return result 
}

var  productEach = function (array){
	var result = 1
	each(array,function(number){
		result = result * number 
	});
	return result 
}

var cubeAll = function (array){

	for( var i = 0 ; i < array.length ; i++){
		array[i] = array[i] * square(array[i])		
	}
	return array  
}


var cubeAllEach = function(array){
	var newArray = []

	each(array,function(number){
	number = number * square(number)
	newArray.push(number)
	})
	return newArray 
} 

var odds = function (array){
	var newArray = []

	for(var i = 0 ; i < array.length ; i++){
		if(array[i] % 2 === 1){
			newArray.push(array[i])
		}
	}
	return newArray 
}

var oddsEach = function (array){
	var newArray = []
	each(array,function(number){
		if(number%2 === 1){
			newArray.push(number)
		}
	})
	return newArray
}

var sumByAllElementsMultipliedByFour = function (array){

	var newArray = []
	each(array,function(number){
		number = number * 4
		newArray.push(number)
	})
	return newArray  
}

var numbers = [1,2,3,4]
var sumBy = function (array , func){
	var sum = 0;
	each(array,function(num){
		sum+= func(num);
	})
	return sum
}

var sumOfarray = function (array){
	var total = 0
	each(array,function(number){
		total = total + number 
	})
	return total
}



var productBy = function(array,func){
	var pro = 1
	each(array,function(num){
		pro*=func(num)
		console.log(pro)
	})
	return pro 
}


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



var keysLongerThan = function (object,number){
	var newObject = {}
	impEach(object,function(num,key){
		if(key.length>number){
			newObject[key] = num ;
		}
	})
	return newObject 
}


var incrementValues = function (object){
	var newObj = {}
	impEach(object,function(element,key){
		if(typeof element === 'number'){
			newObj[key] = element + 1 
		}
		else {
			newObj[key] = element 

		}

	});
	return newObj
}