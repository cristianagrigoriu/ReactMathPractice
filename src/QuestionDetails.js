import math from "mathjs";

class QuestionDetails {
  constructor(operationExpression) {
    this.operationExpression = operationExpression;
    this.correctResult = math.eval(this.operationExpression);
  }
}

export default QuestionDetails;
