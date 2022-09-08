import { Request, Response } from 'express';
import * as questionService from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  const answerData = { askedBy, question };
  
  await questionService.createQuestion(answerData);
  res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  
  const questions = await questionService.get();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const questionId = await questionService.getById(Number(id));

  res.status(200).send(questionId);
}


