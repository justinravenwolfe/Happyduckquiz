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

//Variables for the leader board
var leader_board = [["AS", 10],["JR",15],["JD",20],["SS", 0]]; 
//[Initials, Score]
//[AS, 15]<- how we are storing data
//Functions
//Load the current question/answers, move to the next question
function show_leaderboard(init)
{
    //Ending screen dissapear
    var ending_screen = document.getElementById("end"); 
    ending_screen.id = "ending_screen"; 
    //Add their score/intitials to the leader_board
    leader_board.append([init,score]);
    //Build the table
    var table_content = "";
    //i->index
    for(var i = 0; i < leader_board.length; i++)
    {
        
    }



}
function show_ending(){
//Questions dissapear
var questions = document.getElementById("question");
questions.style.visibility = "hidden";
questions.style.display = "none"; 
//Make the ending appear
//Loading in all elements in the ending screen
var ending_screen = document.getElementById("ending_screen"); 
ending_screen.id = "end";
ending_screen.style.marginTop = "-35%"; 
//Show their score
var score_show =document.getElementById("score");
//<h3><h3> <- <h3>NEW TEXT<h3>
score_show.innerHTML= score;
}
function display_question(){
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
}
function play_quiz()
{
var landing = document.getElementById("landing");
    //.style.visibility
    //.style.display 
landing.style.visibility = "hidden";
landing.style.display = "none"; 
var questions = document.getElementById("questions");
questions.id = ""; 
questions.id = "question"; 
questions.style.marginTop = "-35%"; 
//The landing screen needs to dissapear

//Question screen needs to show
display_question();
//Question data needs to load in 


//Timer needs to start 
//1000ms = 1 second
//setInterval is going to run function every second;
setInterval(run_timer, 1000); 
}
//Return whether the user has given the correct answer or not
function check_answer(answer_id)
{
//Is answer_id the same as the id of the correct answer
var feedback= document.getElementById("feedback");
//Are they correct
if(correct_answers[question_index] == answer_id)
{
feedback.innerHTML = "Correct";
score=score+5;
//var_name++, var_name+=value
}else{
  feedback.innerHTML = "Incorrect";
}
//Return a response depending on if its wrong/right

//Move to the next question
if(question_index == 3)
{
    show_ending();
}else{
    question_index=question_index+1;
    display_question(); 
}
//Make the next prompt show up on the screen;

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