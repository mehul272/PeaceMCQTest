const quizData = [
  {
    question: "The physical body is associated with…",
    a: "Matter",
    b: "Energy",
    c: "Vibrations",
    d: "Spirit",
    correct: "a",
  },
  {
    question: "The subtle body is associated with…",
    a: "Energy ",
    b: "Vibrations",
    c: "Heart & Mind",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "The Astral body or Mental body has main functions which are…",
    a: "Mind (Manas) & Heart",
    b: "Consciousness (Chit)",
    c: "Intellect (Buddhi) & Ego",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "The causal body is associated with…",
    a: "The absolute state of nothingness",
    b: "The cause of our existence",
    c: "The substram of our existence",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "What evolves during the process of self-development ",
    a: "Physical body",
    b: "Causal body",
    c: "Subtle body",
    d: "None of the Above",
    correct: "c",
  },
  {
    question: "According to Vedic Philosophy - In Satvik person, subtle body…",
    a: "Is more stone-like",
    b: "Can move around",
    c: "Loosely connected",
    d: "Strongly connected",
    correct: "b",
  },
  {
    question: "The causal body or soul does not evolve because…",
    a: "It is pure and divine",
    b: "It is absolute",
    c: "It is unchangeable",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "How do we actively allow our consciousness to evolve?",
    a: "By understanding how spiritual practise contributes",
    b: "By opening up the inner universe",
    c: "By creating the conditions for stilling the mind at deeper levels",
    d: "By all the above",
    correct: "d",
  },
  {
    question: "Which is the ultimate goal of spiritual practise?",
    a: "Viveka (discernment)",
    b: "Vairagya (detachment)",
    c: "Shat-Sampati (Spiritual Attainments)",
    d: "Mumukshutva (To seek liberation)",
    correct: "a",
  },
  {
    question:
      'The quote - "Consciousness is a mere film between two oceans, the subconscious and the superconscious," - is attributed to whom?',
    a: "Swami Shivanand",
    b: "Swami Ramkrishna Paramhansa",
    c: "Swami Vivekanand",
    d: "Swami Chinmayanand",
    correct: "c",
  },
  {
    question: "It will not allow our consciousness to expand…",
    a: "Mind (Manas)",
    b: "Intellect (Buddhi)",
    c: "Ego (Shankar)",
    d: "Intuition",
    correct: "c",
  },
  {
    question:
      "The fourth function of subtle body is Manas (Chitta) when it evolves through meditation…",
    a: "Feeling develops to a state of being",
    b: "We go to a state of becoming",
    c: "Then to the state of unbecoming to merge into state of existence",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "The Major States of existence in Physics are",
    a: "Energy solidified into matter",
    b: "Energy as vibrational field",
    c: "Potential energy in its unmanifested state",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "Our Orientation - our attraction or repulsion - creates an emotion…",
    a: "In our brain",
    b: "In our mind",
    c: "In our intellect",
    d: "In our heart",
    correct: "d",
  },
  {
    question:
      "______ is a very vital attitude in any process of personal transformation",
    a: "Self-respect",
    b: "Self-confidence",
    c: "Self-acceptance",
    d: "Self-drive",
    correct: "c",
  },
  {
    question: "It is through our _____ that we are all connected",
    a: "Mind",
    b: "Intellect",
    c: "Heart",
    d: "Ego",
    correct: "c",
  },
  {
    question:
      "There are ______ different principles and methods that make up Yoga",
    a: "Eight",
    b: "Twelve",
    c: "Twenty-four",
    d: "Thirty-five",
    correct: "d",
  },
  {
    question: 'In Sage Patanjali\'s Ashtang Yog Philosophy "Yam" means… ',
    a: "Posture",
    b: "Breath Regulation ",
    c: "Good Conduct",
    d: "Inner Withdrawal",
    correct: "c",
  },
  {
    question: 'In Ashtang Yoga Series "Pratyahara" refers to… ',
    a: "Good Conduct",
    b: "Regularity Observation",
    c: "Mental Focus",
    d: "Inner Withdrawal",
    correct: "b",
  },
  {
    question: 'What do you understand by the term "Pranayam"',
    a: "Meditation",
    b: "Breath Regulation ",
    c: "Posture",
    d: "Original Condition",
    correct: "b",
  },
  {
    question:
      '"Pranayam" is the practise of moderating the energy flows of the…',
    a: "Annamaya Kosh",
    b: "Pranayama Kosh",
    c: "Manomaya Kosh",
    d: "Vidyanmaya Kosh",
    correct: "b",
  },
  {
    question: 'The word "Spirit" comes from the word "Spiritus" which is…',
    a: "Greek word",
    b: "Latin word",
    c: "Hebrew word",
    d: "French word",
    correct: "b",
  },
  {
    question: 'The concept of "Spirit" has meaning _____',
    a: "Incorporated energy force present in living things",
    b: "God, or aspect thereof",
    c: "The supreme nurturing force found in nature",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "Spirit is defined as…",
    a: "The state of person's emotion",
    b: "The vital principle in living things",
    c: "Animation and energy in actions or expression",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "To attain our goals we are willing to undergo…",
    a: "Struggles",
    b: "Discomforts",
    c: "Pain (Physical and Emotional)",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "Every life is an evolution in developing…",
    a: "Wisdom ",
    b: "Skills",
    c: "Attitudes",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "What are the fundamental questions which are the base of enquiry in Science?",
    a: "Who are we?",
    b: "What is the purpose of life?",
    c: "Where have you come from?",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "Our purpose as human beings is all about…",
    a: "The mind",
    b: "The body",
    c: "The consciousness ",
    d: "None of the Above",
    correct: "d",
  },
  {
    question: "Consciousness is word used in…",
    a: "Mind-body medicine",
    b: "Research in Science and Spirituality",
    c: "The Quantum field",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "The purpose of any spiritual practise is to expand…",
    a: "Consciousness",
    b: "Awareness",
    c: "Wakefulness",
    d: "Mindfulness",
    correct: "a",
  },
  {
    question: "The Upanishads are…",
    a: "Concluding portions of Vedas",
    b: "Essence or cream of the Vedas",
    c: 'They are called "Vedanta"',
    d: "All of the Above",
    correct: "d",
  },
  {
    question: '"Upanishad" means…',
    a: "Sitting down of the disciple near his teacher",
    b: "In a devoted manner to receive the knowledge of ultimate reality",
    c: "Which destroys all the doubts and ignorance of the disciple",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      "The number of Upanishads is said to be 108. However, ____ are regarded as the most important",
    a: 11,
    b: 12,
    c: 10,
    d: 14,
    correct: "c",
  },
  {
    question:
      '"Know Thyself" is the main topic of investigation in the Upanishads. We learn the concept of "Self" from…',
    a: "Isha Upanishad",
    b: "Mundaka Upanishad",
    c: "Prashna Upanishad",
    d: "Mandukya Upanishad",
    correct: "d",
  },
  {
    question: "Four states of consciousness are described in ____ Upanishad",
    a: "Chandogya",
    b: "Manduka",
    c: "Mandukya",
    d: "Taittiriya",
    correct: "c",
  },
  {
    question: "The higher fourth state of the Self is called…",
    a: "Prajna",
    b: "Turia",
    c: "Vishva",
    d: "Taijasa",
    correct: "b",
  },
  {
    question: 'What does "AUM" signify?',
    a: "A resembles with the waking state",
    b: "U resembles with the dreaming state",
    c: "M resembles with the deep sleep state",
    d: "All of the Above 3 Mantras",
    correct: "d",
  },
  {
    question: "According to Adishankara's Advait Vedanta Philosophy…",
    a: "Brahman is the ultimate reality",
    b: 'From the objective side this ultimate reality is called "Brahman"',
    c: 'This same reality from subjective side is called "Atman"',
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "Brahman is…",
    a: "Absolutely indeterminate & non-dual",
    b: "Indescribable",
    c: "Beyond speech and mind",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: '"Jiva" is the…',
    a: "Agent and enjoyer",
    b: "Acquires merit and demerit",
    c: "Experiences pleasure and pain",
    d: "All of the Above",
    correct: "d",
  },
  {
    question:
      'When "Jiva" is awakened by the right knowledge, the ignorance vanishes and the "Jiva" realizes that…',
    a: "Its neither the body",
    b: "Nor the senses",
    c: "Nor the mind",
    d: "But is the non-dual universal self ie Thou Art That",
    correct: "d",
  },
  {
    question:
      " What is the state of liking and a holistic and all-encompassing state of the mind that creats the inner harmony",
    a: "Prosperity",
    b: "Happiness ",
    c: "Innateness",
    d: "Self-organize",
    correct: "b",
  },
  {
    question:
      "Identify the solution which helps human being to transform from animal consciousness to human consciousness.",
    a: "Right understanding                                 ",
    b: "Realization",
    c: " Value education  ",
    d: "Physical facilities.",
    correct: "a",
  },
  {
    question:
      "Self-exploration is a process which helps us to find out “What I am and What I really want to be”. Two mechanisms involved in self-exploration are",
    a: "Realization and understanding                           ",
    b: "Natural and verifiable",
    c: "Natural acceptance and experimental validation ",
    d: "Correctable and identifiable",
    correct: "c",
  },
  {
    question: "What are the outcomes of realization and understanding?",
    a: "Work      ",
    b: " Values     ",
    c: " Happiness   ",
    d: "Health",
    correct: "b",
  },
  {
    question: "Contents of self-exploration are  ",
    a: "Desire and needs                                                               ",
    b: "Program and needs",
    c: "Program and practical ",
    d: " Desire and Program",
    correct: "d",
  },
  {
    question: "What is necessary but not complete for human beings. ",
    a: "Happiness                                                                  ",
    b: " Physical facility ",
    c: "Prosperity  ",
    d: "Relationship",
    correct: "b",
  },
  {
    question:
      "Giving weightage to physical facilities, to the maximization of sensory pleasures, to accumulation of wealth is called  ",
    a: "Animal Consciousness    ",
    b: "Animal Unconsciousness  ",
    c: " Semi-consciousness  ",
    d: " Human Consciousness",
    correct: "a",
  },
  {
    question:
      "What  helps  human  beings  to  transform  from  animal  consciousness  to  humanconsciousness?   ",
    a: "Desire and needs                                                               ",
    b: "Prosperity  ",
    c: "Wealth ",
    d: "Right understanding ",
    correct: "d",
  },
  {
    question: "We need to undergo self exploration because  ",
    a: "we want to find out what  is valuable to us",
    b: "we want to understand our relationship",
    c: "we want to our participation with the things around us",
    d: " All of the above.  ",
    correct: "d",
  },
  {
    question: "Health,  Wealth and Wisdom means ",
    a: "Consciousness    ",
    b: " Intelligence   ",
    c: "Prosperity  ",
    d: "Happiness",
    correct: "c",
  },
  {
    question: "What is the emotional state of being happy?",
    a: "Happiness  ",
    b: "Joy  ",
    c: "Pleasure   ",
    d: "All of these ",
    correct: "d",
  },
  {
    question: "Which changes occur in conscious units? ",
    a: "Qualitative     ",
    b: " Quantitative ",
    c: "Both  ",
    d: " None",
    correct: "a",
  },
  {
    question: "Each Human being is co-existence of  ",
    a: "Spirit and Sanyam",
    b: "Health and prosperity ",
    c: "Self and Body",
    d: "Mind and Soul ",
    correct: "c",
  },
  {
    question: "Which of the following does not assume things ",
    a: "Spirit",
    b: " Mind  ",
    c: " Self  ",
    d: "Body",
    correct: "d",
  },
  {
    question: "What is the nature of self? ",
    a: "Conscious",
    b: " Physio-chemical",
    c: "Biochemical  ",
    d: " Semi-conscious",
    correct: "a",
  },
  {
    question: "Which statement is incorrect ",
    a: "What we analyze keeps changing.",
    b: "The activity of analyzing is continuous ",
    c: " Self is also called consciousness",
    d: "Needs of the body are permanent",
    correct: "d",
  },
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
  document.getElementsByClassName("main")[0].style.backgroundColor =
    "DodgerBlue";
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    document.getElementsByClassName("main")[0].style.backgroundColor = "green";
    alert(`You Got it Right!.\nCorrect Answer: ${data[data.correct]}`);
    correct++;
    index++;
    loadQuestion();
  } else {
    document.getElementsByClassName("main")[0].style.backgroundColor =
      "FireBrick";
    alert(`Oops Wrong Answer! Try Again`);
  }
});

const getAnswer = () => {
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });

  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};

loadQuestion(index);
