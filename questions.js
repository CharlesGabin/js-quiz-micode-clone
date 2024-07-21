export const Questions = [
  {
    question:
      "What is the output of the following code?\n\nconsole.log(typeof null);",
    answers: ["object", "null", "undefined", "string"],
    correct: "object",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: ["interface", "throws", "program", "short"],
    correct: "program",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function => myFunction()",
    ],
    correct: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "Call.myFunction()",
    ],
    correct: "myFunction()",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: ["if i == 5 then", "if (i == 5)", "if i = 5 then", "if i = 5"],
    correct: "if (i == 5)",
  },
  {
    question: "How does a WHILE loop start?",
    answers: [
      "while (i <= 10; i++)",
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i < 10) { i++ }",
    ],
    correct: "while (i <= 10)",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "// This is a comment",
      "' This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    correct: "// This is a comment",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    ],
    correct: 'var colors = ["red", "green", "blue"]',
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      "Math.round(7.25)",
      "Math.rnd(7.25)",
      "Math.roundup(7.25)",
      "round(7.25)",
    ],
    correct: "Math.round(7.25)",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["Math.max(x, y)", "Math.ceil(x, y)", "ceil(x, y)", "top(x, y)"],
    correct: "Math.max(x, y)",
  },
];
