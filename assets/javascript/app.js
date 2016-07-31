
$(document).ready(function(){

var questions = [
{
	question:  "What video game is reconized as a sport in Norway, under the name \"machine dancing\"?",
	choices: ["Guitar Hero", "DJ Hero", "Dance Dance Revolution"],
	correctAnswer: 2

},
{
	question:  "Which of the actors that played James Bond once competed in the Mr. Universe contest?",
	choices: ["Sean Connery", "Roger Moore", "Timothy Dalton"],
	correctAnswer: 0

},
{
	question:  "In which war did the most Americans die?",
	choices: ["World War III", "The U.S. Civil War", "Vietnam War"],
	correctAnswer: 1

},

{
	question:  "How many muscles are there in an elephant's trunk?",
	choices: ["400", "4,000", "40,000"],
	correctAnswer: 2

},
{
	question:  "Which is not a color of one of the Olympic rings?",
	choices: ["Black", "Silver", "Yellow"],
	correctAnswer: 1

},
{
	question:  "How long does it take a human blood cell to make a complete circuit of the human body?",
	choices: ["one minutes", "five minutes", "ten minutes"],
	correctAnswer: 0

},
{
	question:  "What kind of car travel through time in Back to the Future?",
	choices: ["Lotus", "DeLorean", "Fiero"],
	correctAnswer: 1

},
{
	question:  "What city is home to Amazon.com's headquarters?",
	choices: ["Seattle", "Tampa", "Denver"],
	correctAnswer: 0

},
{
	question:  "What nonhuman creature kills more people than any other?",
	choices: ["Spider", "Snake", "Mosquito"],
	correctAnswer: 2

},
{
	question:  "What is a somnambulist?",
	choices: ["Sleepwalker", "Tightrope Walker", "Dog Walker"],
	correctAnswer: 0

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
                $input.attr("id", choice)
                $li.append($input);

            var label = $("<label/>")
                label.attr("for", choice);
                label.text(choice);
                $li.append(label);


 			// var $input=$("<input/>");
	 		// 	$input.attr("type", "radio");
	 		// 	$input.attr("name","question"+index);
	 		// 	$input.attr("value", choice);
	 			
				// $li.append($input);

 			// var $label = $("<label/>")
	 		// 	$label.text("type", "radio");
	 		// 	$label.text("name","question"+index);
	 		// 	$label.text("value", choice);

 			// 	$li.append(label);
 			// 	console.log(label);

 		})
//append to id
$("#quiz-question").append($li);




 });

// $("#start").on('click', startTimer);


var count;
var counter;
var timer = 60;



$("#submit").on("click", function(){

	$('#start').removeClass("hidden");
    clearInterval(counter); 
    $(".blanket").addClass("hidden");
   

	// console.log ($("input[name=question0]:checked").val());


})

var counts = 60, timer = setInterval(function() {
    $("#count").html(counts--);
    if(counts == 1) clearInterval(timer);
}, 1000);



function startTimer()
{
	
    
     
}


startTimer();
		$('#start').click(function(){
	  	$(".blanket").removeClass("hidden");
	  	$(this).addClass("hidden");
	  	


});

   








});


