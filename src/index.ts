import inquirer from "inquirer";                          
/* eslint-disable */
let evaluation = "";
inquirer
  .prompt([
    {
      name: "Number",
      type: "input",
      message: "Enter first number",
    },
  ])
  .then((answer1) => {
    evaluation += String(answer1.Number);
    inquirer.prompt([
      {
        name: "Operation",
        type: "input",
        message: "Enter Operation",
      },
    ])
    .then((operationAnswer)=>{
      evaluation+=operationAnswer.Operation;
       inquirer.prompt([
         {
           name: "Number",
           type: "input",
           message: "Enter second number",
         },
       ]).then((answer2)=>{
        evaluation += String(answer2.Number);
        console.log(eval(evaluation));
       })
    })
    .catch((e)=>{
      console.log('ERROR: error in operation anser');
    })
  })
  .catch((error) => {
    console.log("Error", error);
  });


