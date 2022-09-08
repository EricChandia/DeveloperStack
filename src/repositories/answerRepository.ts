//import { prisma } from "@prisma/client";
import { prisma } from "../config/database";
import { Answer } from "@prisma/client";


export async function createAnswer(answer:Answer) {

    const { answer:answerData, answeredBy, questionId } = answer;
    
    await prisma.answer.create({ 	data: {
		answeredBy: answeredBy,
		answer: answerData,
        questionId: questionId
	} });
}