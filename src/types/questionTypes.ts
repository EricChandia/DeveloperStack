import { Question } from '@prisma/client';

//export type QuestionData = Omit<Question, 'id'>;
export type QuestionData = Partial<Question>;

