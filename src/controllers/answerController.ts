import { Request, Response } from 'express';
import * as answerService from "../services/answerService";
import { AnswerData } from '../types/answerTypes';

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body;
  const { id } = req.params;
  const questionId = Number(id);

  const answerData:AnswerData = { questionId,  answeredBy, answer };

  await answerService.createAnswer(answerData);

  res.status(201);

}