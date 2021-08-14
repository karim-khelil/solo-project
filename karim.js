

/*
define a global array it will take all the object of student
we execute the function() when we click on the button add new
we define an empty object
*/

var arr = []

$('#addnew').click(function(){
//we define an empty object
var a = {}
// assign all the element in the object (a) will take the value wroten in the input text
// we have 3 keys 
  a.firstname = $('#firstname').val()
  a.lastname = $("#lastname").val()
  a.average = $("#average").val()

//we will push all the abject we had created in the array of student
arr.push(a)

})





$('#playlist').click(function(){
// a message append in a box to informe user of the name students
$("#lab1").append("the name of students")

//we loop through the array and we play the liste of the student
for (var i = 0 ; i<arr.length ;i++){
var list = $(`<li> the student  ${arr[i].firstname}  ${arr[i].lastname} have an average  ${arr[i].average}</li>`)

// all the students will be played in a playlist 
$("#show").append(list)
}

})


$('#bestscore').click(function(){
// define an array ; it will take the first element of the object student
var max =arr[0].average
//loop over the array 
for (var i = 1 ; i<arr.length ;i++){
//check the maximum average between people and assign it to the max variable
if(arr[i].average>max){
max = arr[i].average

}

}
// informe the user about the max avearage
alert(max)

})





//var list = $(`<li>${arr[i].firstname,arr[i].lastname,arr[i].average} </li>`) ;