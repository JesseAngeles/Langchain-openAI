import { Request, Response } from "express";
import answers from "../models/answers";
import { question } from "./chatOpenAI";

export const generateAnswer = async (req: Request, res: Response) => {
    try {
        const message: string = req.body.question;
        const result: string = await question(message);
        const addAnswer = await answers.create({ question: message, result: result });
        return res.status(200).json(addAnswer);
    } catch (error) {
        return res.status(500).send(`INTERNAL SERVER ERROR: ${error}`);
    }
}

export const readAllAnswers = async (req: Request, res: Response) => {
    try {
        const allAnswers = await answers.find();
        return res.status(200).json(allAnswers);
    } catch (error) {
        return res.status(500).send(`INTERNAL SERVER ERROR: ${error}`);
    }
}