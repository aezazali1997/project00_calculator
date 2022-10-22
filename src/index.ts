import inquirer, { Answers } from "inquirer";

/* eslint-disable */
let evaluation = "";
inquirer
  .prompt([
    {
      name: "number",
      type: "input",
      message: "Enter first number",
    },
  ])
  .then((answers: Answers) => {
    evaluation += String(answers.number);
    inquirer
      .prompt([
        {
          name: "operation",
          type: "list",
          message: "Select the operation (+ => 1, - => 2 * => 3, / => 4)",
          choices: ["+", "-", "*", "/"],
        },
      ])
      .then((operationAnswer: Answers) => {
        evaluation += operationAnswer.operation;
        inquirer
          .prompt([
            {
              name: "number",
              type: "input",
              message: "Enter second number",
            },
          ])
          .then((answer: Answers) => {
            evaluation += String(answer.number);
            console.log("Result = " + eval(evaluation));
          });
      })
      .catch((e) => {
        console.log("ERROR: error in operation anser");
      });
  })
  .catch((error) => {
    console.log("Error", error);
  });
