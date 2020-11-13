player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_name_1").innerHTML = player1 + ":";
document.getElementById("player_name_2").innerHTML = player2 + ":";

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("question").innerHTML = "Question : " + player1;
document.getElementById("answer").innerHTML = "Answer : " + player2;

function Send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Lower Case Is : " + length);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    mid = Math.floor(word.length/2);
    charAt2 = word.charAt(mid);
    console.log(charAt2);

    end = word.length - 1;
    charAt3 = word.charAt(end);
    console.log(charAt3);

    remove_charAt1 = word.replace( charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log("charAt3");

    Question_word = "<h4 id='word_display'> Q. " +remove_charAt3 + "</h4>";
    input_box = "<br><br> Answer : <input type='text' id='input_box'>";
   check_button = "<br><br> <button class='btn btn-info' onclick='Check()'> Check </button>";
   row = Question_word + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function Check(){
    get_word = document.getElementById("input_box").value;
    answer = get_word.toLowerCase();
    console.log("Answer in lower case is : " + answer);

    if(answer == word){

    if(answer_turn == "player_1"){

 update_score1 = player1_score + 1;
 document.getElementById("player_1_score").innerHTML = update_score1;
}
else{
update_score2 = player2_score + 1;
document.getElementById("player_2_score").innerHTML = update_score2;
} 
    }

if( question_turn == "player_1"){
 question_turn = "player_2";
 document.getElementById("question").innerHTML = "Question Turn : " + player2;
}
else{
    question_turn = "player_1";
    document.getElementById("question").innerHTML = "Question Turn : " + player1;
}

if(answer_turn == "player_1"){
    answer_turn = "player_2";
    document.getElementById("answer").innerHTML = "Answer Turn : " + player2;
}
else{
    answer_turn = "player_1";
    document.getElementById("answer").innerHTML = "Answer Turn : " + player1;
}
document.getElementById("output").innerHTML = "";
}