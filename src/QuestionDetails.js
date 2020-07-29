import math from "mathjs";

//const { default: useOperation } = require("./useOperation");

class QuestionDetails {
  constructor(operationExpression) {
    this.operationExpression = operationExpression;
    this.correctResult = math.eval(this.operationExpression);
  }

  //mutat logica generate random number
}

export default QuestionDetails;
