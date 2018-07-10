"use strict";

const STORE = [
	{
		question: '1. Who started the fire in the break room in Season 2?',
		options: ['Jim', 'Pam', 'Dwight', 'Ryan'],
		answer: 'Ryan',
		quote: '&#34;Sometimes I&rsquo;ll start a sentence, and I don&rsquo;t even know where it&rsquo;s going. I just hope I find it along the way.&#34; - Michael Scott',
		image: 'https://media.gq.com/photos/5a53e9fca929253c4d20a04f/3:2/w_560/does-the-office-hold-up-gq.jpg',
		alt: 'michaelscott'
	},
	{
		question: '2. What does Michael put in Toby\'s desk in order to frame him for drug possession?',
		options: ['Caesar Salad', 'Caprese Salad', 'Spinach', 'Garden Salad'],
		answer: 'Caprese Salad',
		quote: '&#34;Beets, Bears, Battlestar Galactica&#34; - Jim Halpert',
		image: 'http://az616578.vo.msecnd.net/files/2016/05/20/635993129542026172875381800_jim%20pranks.png',
		alt: 'jim'
	},
	{
		question: '3. What was the occupation of Pam\'s blind date?',
		options: ['Cartoonist', 'Fire Fighter', 'Store Clerk', 'Dentist'],
		answer: 'Cartoonist',
		quote: '&#34;Did I stutter?&#34; - Stanley Hudson',
		image: 'http://68.media.tumblr.com/f40f0fc67d0c8a13a9250fe43d9ac6e5/tumblr_ok7xzqfata1rs0w1ho1_500.gif',
		alt: 'stanley'
	},
	{
		question: '4. How does Jan break Michael\'s TV?',
		options: ['With an ax', 'With a hammer', 'With a bowling ball', 'With a Dundie award'],
		answer: 'With a Dundie award',
		quote: '&#34;I have alot of questions. Number one, how dare you?&#34; - Kelly Kapoor',
		image: 'https://media1.popsugar-assets.com/files/thumbor/YvjVoI90PUzqzfeAOgDWn-Sh6sc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/06/21/951/n/1922283/68cfe71c_edit_img_cover_file_41730517_1466542783_Kelly-Kapoor/i/Kelly-Kapoor-GIFs-From-Office.jpg',
		alt: 'kelly'
	},
	{
		question: '5. Where did Jim and Pam get married?',
		options: ['Niagra Falls', 'Scranton, PA', 'New York, New York', 'Philadelphia, PA'],
		answer: 'Niagra Falls',
		quote: '&#34;I. Declare. Bankruptcy!&#34; - Michael Scott',
		image: 'https://i.imgflip.com/ie6w2.jpg',
		alt: 'michaelscott'
	},
	{
		question: '6. Who wins the Fun Run 5k?',
		options: ['Michael', 'Toby', 'Dwight', 'Oscar'],
		answer: 'Toby',
		quote: '&#34;I wish there was a way to know you\'re in the good old days, before you\'ve actually left them.&#34; - Andy Bernard',
		image:'https://sporkbroken.files.wordpress.com/2011/10/andybernard.jpg',
		alt:'andy'
	},
	{
		question: '7. What city does Michael move to after his engagement to Holly?',
		options: ['Vail, CO', 'Aspen, CO', 'Denver, CO', 'Boulder, CO'],
		answer: 'Boulder, CO',
		quote:'&#34;Why are all these people here? There are too many people on this earth. We need a new plague.&#34; - Dwight Schrute',
		image: 'https://fsmedia.imgix.net/b8/a1/59/4a/cdb4/4616/ac81/8ba1b1523446/o-dwight-the-office-facebookjpg.jpeg?rect=0%2C0%2C2000%2C1000&dpr=2&auto=format%2Ccompress&w=650',
		alt: 'dwight'
	},
	{
		question: '8. What did Phyllis ask Michael to do in her wedding?',
		options: ['Make a toast', 'Bake a cake', 'Be a groomsman', 'Walk her father down the aisle'],
		answer: 'Walk her father down the aisle',
		quote: '&#34;I\'m Not Superstitious. I\'m just a little Stitious.&#34; - Michael Scott',
		image:'https://cdn-images-1.medium.com/max/1600/1*-SoJy52kgGuN9Fj9jmIb0Q.png',
		alt: 'michaelscott'
	},
	{
		question: '9. What is one of Stanley\'s favorite days at the office?',
		options: ['Pretzel Day', 'Ice Cream Day', 'Pizza Day', 'His Birthday'],
		answer: 'Pretzel Day',
		quote: '&#34;Dunder Mifflin. This is Pam.&#34;',
		image: 'http://digitalspyuk.cdnds.net/18/02/980x490/landscape-1515504761-maxresdefault.jpg',
		alt: 'pam'
	},
	{
		question: '10. What is Michael Scott\'s middle name?',
		options: ['Shaun', 'Gary', 'Toby', 'Greg'],
		answer: 'Gary',
		quote: '&#34;I am Beyonce, always&#34; - Michael Scott',
		image: 'http://www.tvstyleguide.com/wp-content/uploads/2015/11/michael_scott_cover-1020x560.jpg',
		alt: 'michaelscott'
	}
];

// Set default Question Number, Correct, and Incorrect Score

let questionNumber = 1;
let i = 0;
let score = 0;
let scoreI = 0;

// When start button is clicked, hide the button and go to the first question

function startButton() {
  $('.button-start').click(event =>
    $('.button-start').addClass(`hidden`)
  );
  $('.button-start').click(event =>
    $('.instructions').addClass(`hidden`)
  );
  $('.button-start').click(event =>
    generateQuestionBlock()
  );
}


//Generate the questions and show the block

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
	<div class="btn-sub"><button type="submit" id="button-submit" value="Go">Submit Answer</button></div>
	</fieldset>
   </form></div>
   
`;


$('.js-question-box').append(answerBlock);
$('.js-question-box').removeClass('hidden');
$('.data-box').removeClass('hidden');
$('.quiz-box').addClass('hidden');

clickButton();

}

/* When the user clicks on the Submit Button, this checks to see if a user checked an answer. 
If they didn't, they will receive and error. If so, it checks the answer.*/

function clickButton() {
	
	$('.js-answer-box').addClass('hidden');
	
     $('#question-form').on('submit', function(event) {
  	if (!$("input[name=answer]:checked").val()) {
        alert('Nothing is checked!');
        return false; // so form doesn't submit
    }
    else {
    event.preventDefault();
    checkAnswer();
	$('#button-submit').remove();
  	$('.js-questions').remove();
  	$('.js-question-box').addClass('hidden');
  	whenToStopQuiz();
    }
});
  	}

// This tells the app to go on to the next question, or stop the quiz and tally the score.
function whenToStopQuiz(){

  	if (i < STORE.length ) {
  		nextButton();
  	}
  	else {
  		tallyScore();
  	}
}
		
//When the button is clicked to go on to the next question, this tells it to go to the next question and increase the question number by one.
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

//Generates the users current score
function generateScore() {
	
	const scoreBlock = `
		<div class='score-total'>
			<p>Your Score: ${score} Correct, ${scoreI} Incorrect</p>
		</div>
	`
	$('.score-block').html(scoreBlock);
}

//Generates what number question the user is on
function generateQuestionNumber() {
	
	const questionNumberBlock = `
		<div class='change-question-number'>
			<p class='question-number-number'>Question ${i + 1} of 10</p>
		</div>
	`
	$('.question-number').html(questionNumberBlock);
}

//This checks to see if the user has the correct answer.
function checkAnswer() {

	let userAnswer = $('input[name=answer]:radio:checked').val();
	
	const correctBlock = 
	`<div class="answer-block">
	<h4>Great job!</h4>
	<p>${STORE[i].quote}</p>
	<img src="${STORE[i].image}" class="officeimg" alt="${STORE[i].alt}">
	<button type="submit" id="button-nextquestion" class="hidden" value="Go">Next Question</button>
	</div>
	`

	const incorrectBlock = `
	<div class="answer-block">
	<h4> Sorry, the correct answer was ${STORE[i].answer}
		</h4>
		<p>${STORE[i].quote}</p>
	<img src="${STORE[i].image}" class="officeimg" alt="${STORE[i].alt}">
	<button type="submit" id="button-nextquestion" class="hidden" value="Go">Next Question</button>
	</div>
	`
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

// This tallies the users scores and shows it
function tallyScore() {
	const finalScore = `
	<div class="answer-block">
	<h3>Here's Your Final Score:</h3>
	<h4>${score} Correct, ${scoreI} Incorect</h4>
	<div class="endimage"><img src='http://mrwgifs.com/wp-content/uploads/2013/12/Dwight-Schrute-Michael-Scott-Raise-The-Roof-On-The-Office.gif' class='officeimg' alt='michaelraisinghands'></div>
	<button type="submit" id="button-restart" onclick="resetQuiz()" value="Go">Restart Quiz</button></div>`;
	$('.js-final-box').append(finalScore);
	$('.js-final-box').removeClass('hidden');
	
}

// This resets the quiz to the begining
function resetQuiz(){
    location.reload();
}

// Begins the quiz
function beginQuiz() {
	startButton();
	generateScore();
	generateQuestionNumber();
}

beginQuiz();
