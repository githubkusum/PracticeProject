var questionBank= [
    {
        question : 'Which language runs in a web browser?',
        option : ['Java','PHP','C','Javascript'],
        answer : 'Javascript'
    },
    {
        question : 'What does CSS stand for?',
        option : ['Central Style Sheets','Cascading Style Sheets','Cascading Simple Sheets','Cars SUVs Sailboats'],
        answer : 'Cascading Style Sheets'
    },
    {
        question : 'What does HTML stand for?',
        option : ['Hypertext Markup Language','Hypertext Markdown Language','Hyperloop Machine Language','All of the above'],
        answer : 'Hypertext Markup Language'
    },
    {
        question : 'What year was JavaScript launched?',
        option : ['1996','1995','1994','one of the above'],
        answer : '1995'
    },
    {
        question : ' Where is the meta tag only found?',
        option : ['The last page','The home page','The second page','none of the above'],
        answer : 'The home page'
    },
    {
        question : 'What is the smallest header in HTML by default?',
        option : ['h1','h4','h6','h2'],
        answer : 'h6'
    }
];

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();