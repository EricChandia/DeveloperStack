import { AnswerData } from "../types/answerTypes";
import * as answerRepository from "../repositories/answerRepository"

export async function createAnswer(answerData: AnswerData) {
  
    await answerRepository.createAnswer(answerData);
}