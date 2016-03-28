function adding(){
	var str1 = document.getElementById("str1"); 
	var str2 = document.getElementById("str2");

	var one = str1.value; //store the value of the string
	var two = str2.value;
	
	var result = document.getElementById("result");
	result.value= one+two; //print the result
}
