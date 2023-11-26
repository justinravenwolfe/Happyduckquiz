//Var<- type indicator, means variable
// within this java script im grabbing that button
var start_button = document.getElementById("start-button");
var score = 0;
//120 seconds total for the quiz
var time = 120; 
var question_index = 0; 
//Question Data
var question_list = ["In which borrow is Yankees stadium located?",
"Which one of these players was never on the Yankees?",
"What color scheme are the Yankees home team uniforms?",
"How many World Series rings have the Yankees won?"];
//The multiple choice answers corresponding to each question
// we are using interger for one questions because it has has to do with numbers
var choices = [["Brooklyn","Bronx", "Queens", "NYC"],
["Player1", "Player2", "Player3", "Player4"],
["White with Blue pin-stripes", "Yellow with pokka dots", "solid red", "green"],
[20,30,27,6]];
var correct_answers = [1, 1, 0, 2];
//Functions
//Load the current question/answers, move to the next question
function play_quiz()
{
var landing = document.getElementById("landing");
    //.style.visibility
    //.style.display 
landing.style.visibility = "hidden";
landing.style.display = "none"; 
var questions = document.getElementById("questions");
questions.id = ""; 
questions.style.marginTop = "-35%"; 
//The landing screen needs to dissapear

//Question screen needs to show

//Question data needs to load in 
var prompt = document.getElementById("prompt");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4")
//Changing the current prompt to the current question
prompt.innerHTML = question_list[question_index];
//Going into the correct list for our current question, pick the first option
opt1.innerHTML = choices[question_index][0]; 
opt2.innerHTML = choices[question_index][1]; 
opt3.innerHTML = choices[question_index][2];
opt4.innerHTML = choices[question_index][3];

//Timer needs to start 
//1000ms = 1 second
//setInterval is going to run function every second;
setInterval(run_timer, 1000); 
}
//Return whether the user has given the correct answer or not
function check_answer(answer_id)
{
//Is answer_id the same as the id of the correct answer


//Move to the next question

}
//Decrementing the timer 
function run_timer()
{
//All function commands in here
var timer= document.getElementById("timer");
//Print current amount of time to screen
timer.innerHTML = time; 
//subtract time by 1 
 time=time-1;
}

//DOM<- Document Object Model, In HTML ever item is a in object<- data/behavior. Using DOM
//javascript can change items in the HTML
// example of dom manipulation is once a user clicks a button the button turns red. anything that changed default views is dom manipulation.