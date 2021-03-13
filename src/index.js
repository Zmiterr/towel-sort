
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == ''||matrix == undefined) {
    	return [];
    }
	else {
	  var arr = []
      for (let i = 0; i < matrix.length; i++){
         var subArr = (i+1)%2?String(matrix[i]).split(','):String(matrix[i]).split(',').reverse();
         arr.push(subArr);   
    }
  return String(arr).split(',').map(Number)
  }
}
