//import { prisma } from "@prisma/client";
import { prisma } from "../config/database";
import { Answer } from "@prisma/client";
import { AnswerData } from "../types/answerTypes";


export async function createAnswer(answerData:AnswerData) {

    const { answer, answeredBy, questionId } = answerData;
    
    await prisma.answer.create({ 	data: {
		answeredBy: String(answeredBy),
		answer: String(answer),
    questionId: Number(questionId)
	} });
}