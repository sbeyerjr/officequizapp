"use strict";

const STORE = [
	{
		question: '1. Who started the fire in the break room in Season 2?',
		options: ['Jim', 'Pam', 'Dwight', 'Ryan'],
		answer: 'Ryan',
		quote: '&#34;Sometimes I&rsquo;ll start a sentence, and I don&rsquo;t even know where it&rsquo;s going. I just hope I find it along the way.&#34; - Michael Scott'
	},
	{
		question: '2. What does Michael put in Toby\'s desk in order to frame him for drug possession?',
		options: ['Caesar Salad', 'Caprese Salad', 'Spinach', 'Garden Salad'],
		answer: 'Caprese Salad',
		quote: '&#34;Beets, Bears, Battlestar Galactica&#34; - Jim Halpert'
	},
	{
		question: '3. What was the occupation of Pam\'s blind date?',
		options: ['Cartoonist', 'Fire Fighter', 'Store Clerk', 'Dentist'],
		answer: 'Cartoonist',
		quote: '&#34;Did I stutter?&#34; - Stanley Hudson'
	},
	{
		question: '4. How does Jan break Michael\'s TV?',
		options: ['With an ax', 'With a hammer', 'With a bowling ball', 'With a Dundie award'],
		answer: 'With a Dundie award',
		quote: '&#34;I have alot of questions. Number one, how dare you?&#34; - Kelly Kapoor'
	},
	{
		question: '5. Where did Jim and Pam get married?',
		options: ['Niagra Falls', 'Scranton, PA', 'New York, New York', 'Philadelphia, PA'],
		answer: 'Niagra Falls',
		quote: '&#34;I. Declare. Bankruptcy!&#34; - Michael Scott'
	},
	{
		question: '6. Who wins the Fun Run 5k?',
		options: ['Michael', 'Toby', 'Dwight', 'Oscar'],
		answer: 'Toby',
		quote: '&#34;I wish there was a way to know you\'re in the good old days, before you\'ve actually left them.&#34; - Andy Bernard'
	},
	{
		question: '7. What city does Michael move to after his engagement to Holly?',
		options: ['Vail, CO', 'Aspen, CO', 'Denver, CO', 'Boulder, CO'],
		answer: 'Boulder, CO',
		quote:'&#34;Why are all these people here? There are too many people on this earth. We need a new plague.&#34; - Dwight Schrute'
	},
	{
		question: '8. What did Phyllis ask Michael to do in her wedding?',
		options: ['Make a toast', 'Bake a cake', 'Be a groomsman', 'Walk her father down the aisle'],
		answer: 'Walk her father down the aisle',
		quote: '&#34;I\'m Not Superstitious. I\'m just a little Stitious.&#34; - Michael Scott'
	},
	{
		question: '9. What is one of Stanley\'s favorite days at the office?',
		options: ['Pretzel Day', 'Ice Cream Day', 'Pizza Day', 'His Birthday'],
		answer: 'Pretzel Day',
		quote: '&#34;I am Beyonce, always&#34; - Michael Scott'
	},
	{
		question: '10. What is Michael Scott\'s middle name?',
		options: ['Shaun', 'Gary', 'Toby', 'Greg'],
		answer: 'Gary',
		quote: '&#34;Dunder Mifflin. This is Pam.&#34;'
	}
];


// To let me know there's no errors running, and to give me an added dose of encouragement. :-)
function newStart() {
	console.log('Good job. You\'re doing great!');

}

newStart();

let questionNumber = 1;
let i = 0;
let score = 0;
let scoreI = 0;
// Start the quiz, hide start button and start question loop


  $('.button-start').click(event =>
    $('.button-start').addClass(`hidden`)
  );
  $('.button-start').click(event =>
    $('.instructions').addClass(`hidden`)
  );
  $('.button-start').click(event =>
    generateQuestionBlock()
  );

function generateScore() {
	
	const scoreBlock = `
		<div class='score-total'>
			<p>Your Score: ${score} Correct, ${scoreI} Incorrect</p>
		</div>
	`
	$('.score-block').html(scoreBlock);
}

function generateQuestionNumber() {
	
	const questionNumberBlock = `
		<div class='change-question-number'>
			<p class='question-number-number'>Question ${i + 1} of 10</p>
		</div>
	`
	$('.question-number').html(questionNumberBlock);
}

//Loop through the questions
generateScore();
generateQuestionNumber();
function generateQuestionBlock() {
	
	const answerBlock =  
	`
	<div class="js-questions">
	<h3>${STORE[i].question}</h3>
	<form id="question-form">
	 <fieldset name="answer">
      <legend>Choose An Answer</legend>
   	<input type="radio" name="answer" id ="option1" value="${STORE[i].options[0]}" required><label for="option1">${STORE[i].options[0]}</label><br>
    <input type="radio" name="answer" id ="option2" value="${STORE[i].options[1]}"><label for="option2">${STORE[i].options[1]}</label><br>
	<input type="radio" name="answer" id ="option3" value="${STORE[i].options[2]}"><label for="option3">${STORE[i].options[2]}</label><br>
	<input type="radio" name="answer" id ="option4" value="${STORE[i].options[3]}"><label for="option4">${STORE[i].options[3]}</label><br>
	<button type="submit" id="button-submit" value="Go">Submit Answer</button>
	</fieldset>
   </form></div>
   <button type="submit" id="button-nextquestion" class="hidden" value="Go">Next Question</button>

`;
	let validate = !$('input[name=answer]:radio:checked').val()
	$('.js-answer-box').addClass('hidden');
	$('.js-question-box').append(answerBlock);
    $('#button-submit').on('click', function(event) {
    	checkAnswer();
  	$('#button-submit').remove();
  	$('.js-questions').remove();
  	

  	if (i < STORE.length ) {
  		
  		nextButton();
  	}
  	else {
  		tallyScore();
  	}
  	});

}


  		

function nextButton(){
	 $('.js-answer-box').removeClass('hidden');
	 $('#button-nextquestion').removeClass('hidden');
     $('#button-nextquestion').on('click', function(event) {
  		generateQuestionBlock();
  		generateQuestionNumber();
  		questionNumber++;
  	$('#button-nextquestion').remove();
  	
  	});
	
}


function checkAnswer() {

		let userAnswer = $('input[name=answer]:radio:checked').val();
		const correctBlock = 
	`<div class="answer-block">
	<h4>Great job!</h4>
	<p>${STORE[i].quote}</p></div>
	`

	const incorrectBlock = `
	<div class="answer-block">
	<h4> Sorry, the correct answer was ${STORE[i].answer}
		</h4>
		<p>${STORE[i].quote}</p>
		</div>
	
	`
	console.log(userAnswer);
	
	if(userAnswer === STORE[i].answer){
		$('.js-answer-box').html(correctBlock);
		score++;
		console.log(score);
	}else{
		$('.js-answer-box').html(incorrectBlock);
		scoreI++;
	}
	i++;

generateScore();

}

function resetQuiz(){
    location.reload();
}

function tallyScore() {
	const finalScore = `
	<div class="answer-block">
	<h3>Here's Your Final Score:</h3>
	<h4>${score} Correct, ${scoreI} Incorect</h4>
	<button type="submit" id="button-restart" onclick="resetQuiz()" value="Go">Restart Quiz</button></div>`;
	$('.js-final-box').append(finalScore);
	
}
    


