import { Router } from "express";
import { generateAnswer, readAllAnswers } from "../controllers/answers";

const routerAnswer = Router();

routerAnswer.post('/ask', generateAnswer);
routerAnswer.get('/allAnswers', readAllAnswers);

export default routerAnswer;