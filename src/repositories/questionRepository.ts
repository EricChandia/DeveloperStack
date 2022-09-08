//import { prisma } from "@prisma/client";
import { prisma } from "../config/database";
import { Question } from "@prisma/client";
import { QuestionData } from "../types/questionTypes";


export async function findQuestionById(id: number) {
    
    const question = await prisma.question.findUnique({ where: { id: id } });

    return question;
}

export async function findAll() {
    
    const questions = await prisma.question.findMany();

    return questions;
}


export async function createQuestion(questionData: QuestionData) {

    
    await prisma.question.create({ 	data: {
		askedBy: String(questionData.askedBy),
		question: String(questionData.question)
	} });
}