import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './QuizPage.css';
//code above imports from QuizPage.css file
function QuizPage() {
  const [questions] = useState([
    {
      id: 1,
      question: "What is ransomware in the context of healthcare?",
      options: [
        "A medical billing error",
        "A cyberattack that encrypts healthcare data and demands payment",
        "A type of virus that causes data loss",
        "A method of patient data archiving"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Why is the healthcare industry a prime target for ransomware?",
      options: [
        "Healthcare staff are tech-savvy",
        "Hospitals have limited cybersecurity",
        "Patient data is not valuable",
        "Medical devices are immune to malware"
      ],
      correct: 1
    },
    {
      id: 3,
      question: "What kind of data do ransomware attackers often seek in hospitals?",
      options: [
        "Employee payroll",
        "Marketing materials",
        "Electronic Health Records (EHR)",
        "Cafeteria menus"
      ],
      correct: 2
    },
    {
      id: 4,
      question: "What is a common way ransomware enters healthcare systems?",
      options: [
        "Paper charts",
        "Encrypted files",
        "Phishing emails to hospital staff",
        "Secured databases"
      ],
      correct: 2
    },
    {
      id: 5,
      question: "What should hospital IT staff do during a ransomware attack?",
      options: [
        "Pay the ransom quickly",
        "Shut down systems and notify security teams",
        "Ignore the alert",
        "Delete random files"
      ],
      correct: 1
    },
    {
      id: 6,
      question: "Which of the following best prevents ransomware attacks in hospitals?",
      options: [
        "Disabling antivirus",
        "Regular staff training and data backups",
        "Sharing login credentials",
        "Avoiding system updates"
      ],
      correct: 1
    },
    {
      id: 7,
      question: "Which healthcare-related ransomware attack was globally infamous?",
      options: [
        "Heartbleed",
        "WannaCry",
        "Stuxnet",
        "Petya"
      ],
      correct: 1
    },
    {
      id: 8,
      question: "What is the risk of paying the ransom?",
      options: [
        "Patients may become aware",
        "Hackers might not decrypt the data",
        "Hospitals get a tax refund",
        "Payment always guarantees full recovery"
      ],
      correct: 1
    },
    {
      id: 9,
      question: "How can hospitals reduce downtime during ransomware attacks?",
      options: [
        "Use of daily data backups and disaster recovery plans",
        "Turning off all computers",
        "Only using paper records",
        "Ignoring security alerts"
      ],
      correct: 0
    },
    {
      id: 10,
      question: "What should be part of every hospital's ransomware response plan?",
      options: [
        "Silence from IT",
        "Paying in cryptocurrency",
        "A tested incident response and recovery plan",
        "Hiring more nurses"
      ],
      correct: 2
    }
  ]); //code above is about all of the question inside the quiz with the their corresponding answers.
  

//code below is use to track the users interacting with the quiz by using these variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

   //this makes sure that the correct answer is maintain when user selects answer
  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion]?.correct;
    
    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 1); //this is used to update the score as each question is answered
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress(((nextQuestion + 1) / questions.length) * 100);
    } else {
      setIsQuizComplete(true);
    }
  };

  

  // This will allow the quiz to be submitted and will have a message if the submission will successful or not
  const submitQuiz = async () => {
    try {
      await axios.post('http://localhost:5000/api/quiz/results', { score });
      alert(`You scored ${score} out of ${questions.length}!`);
      navigate('/');
    } catch (error) {
      console.error("Error submitting quiz results", error);
    }
  };
//code below is the quiz box that contains title, questions and answers to choice
  return (
    <div className="quiz-container">
      <h1>Cybersecurity Ransomware Quiz</h1>
      {!isQuizComplete ? (
        <div>
          <p>{questions[currentQuestion]?.question}</p>
          <div className="options">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
            
        </div> //this is the progress bar
      ) : ( 
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
          {score < 5 && (
          <p className="improve-message">
          You need to improve your ransomware awareness. Review the material and try again!
          </p>
          )}

          {score >= 5 && score < 7 && (
          <p className="medium-score-message">
          You're getting there! Review a few key areas to boost your ransomware knowledge.
          </p>
          )}

          {score >= 7 && (
          <p className="well-done-message">
          Well done! You have a strong understanding of ransomware in healthcare.
          </p>
          )}
          <button onClick={submitQuiz}>Submit Quiz</button>
          <button onClick={() => navigate('/')}>Return to Home</button>
        </div>
      )}
    </div>
  );
  // displays different message based on the score you get for example 5 or less, you need to improve, 5 or more, getting better or need improvement and 7 or more, well done
  
}

export default QuizPage;
