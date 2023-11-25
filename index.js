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
//The landing screen needs to dissapear
var landing = document.getElementById("landing");
//.style.visibility
//.style.display 
landing.style.visibility = "hidden";
landing.style.display = "none"; 
//Question screen needs to show

//Question data needs to load in 

//Timer needs to start 
}
//Return whether the user has given the correct answer or not
function check_answer(answer_id)
{

}
//Decrementing the timer 
function set_timer(){

}

//DOM<- Document Object Model, In HTML ever item is a in object<- data/behavior. Using DOM
//javascript can change items in the HTML
// example of dom manipulation is once a user clicks a button the button turns red. anything that changed default views is dom manipulation.