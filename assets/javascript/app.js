
$(document).ready(function(){

var questions = [
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},

{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: "answer"

}

];
//"for" loop for jquery
 $.each(questions, function(index,value){
//making a list in jquery

 		var $li=$("<li></li>");
 		$li.html(index + 1+". "+value.question);
//looping through question choices
 		$.each(value.choices, function(choiceIndex, choice){

 			var $input=$("<input></input>");
 			$input.attr("type", "radio");
 			$input.attr("name","question"+index);
 			$input.attr("value", choice);
 			$li.append($input);


 		})
var $correct =$("<input></input>");
//append to id
$("#quiz-question").append($li);




 });

// $("#start").on('click', startTimer);







$("#submit").on("click", function(){

	console.log ($("input[name=question0]:checked").val());


})

var count;
var counter;

function startTimer()
{
    
    $('#start').show();
    clearInterval(counter);  
}

$(document).ready(function(){
    startTimer();
    $('#start').click(function(){
        $('#start').hide();
        
        $('#count').animate({width: 'toggle'});
        count=65;
        counter=setInterval(timer, 1000);
        function timer(){
          count=count-1;
          if (count <= 0){
            clearInterval(counter);
            return;  }
         }
    });

   
});







});


