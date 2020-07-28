import math from "mathjs";
import useOperation from "./useOperation";

//const { default: useOperation } = require("./useOperation");

class QuestionDetails {
  constructor(operations) {
    this.operationExpression = useOperation(operations);
    this.correctResult = math.eval(this.operationExpression);
  }

  //mutat logica generate random number
}
