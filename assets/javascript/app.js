
$(document).ready(function(){

var questions = [
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: [2]

},
{
	question:  "How do",
	choices: ["this", "that", "then"],
	correctAnswer: [0]

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
 		$li.attr("correctAnswer", value.correctAnswer)
//looping through question choices
 		$.each(value.choices, function(choiceIndex, choice){

 			var $input=$("<input/>");
	 			$input.attr("type", "radio");
	 			$input.attr("name","question"+index);
	 			$input.attr("value", choice);
				$li.append($input);

 			var label = $("<label/>")
	 			label.text("type", "radio");
	 			label.attr("name","question"+index);
	 			label.attr("value", choice);
 				$li.append(label);


 		})
//append to id
$("#quiz-question").append($li);




 });

// $("#start").on('click', startTimer);


var count;
var counter;




$("#submit").on("click", function(){

	$('#start').removeClass("hidden");
    clearInterval(counter); 
    $(".blanket").addClass("hidden");

	// console.log ($("input[name=question0]:checked").val());


})




function startTimer()
{
	var startClock = 60, timer = setInterval(function() {
    $("#count").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);
    
     
}


startTimer();
		$('#start').click(function(){
	  	$(".blanket").removeClass("hidden");
	  	$(this).addClass("hidden");
	  

});

   








});


