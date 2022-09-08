import { Answer } from "@prisma/client";
import { QuestionData } from "../types/questionTypes";
import * as questionRepository from "../repositories/questionRepository";


export async function createQuestion(questionData: QuestionData) {

    questionRepository.createQuestion(questionData);
}


export async function get() {

    const questions = await questionRepository.findAll();
    return questions;
}


export async function getById(id: number) {

   const question = await questionRepository.findQuestionById(id);
   return question;
}
