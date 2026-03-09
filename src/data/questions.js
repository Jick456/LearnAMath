import { g1Topics, g1Questions } from './syllabuses/g1_data';
import { g2Topics, g2Questions } from './syllabuses/g2_data';
import { g3Topics, g3Questions } from './syllabuses/g3_data';
import { addMathTopics, addMathQuestions } from './syllabuses/addmath_data';

// Consolidate all topics
const topics = [
    ...g1Topics,
    ...g2Topics,
    ...g3Topics,
    ...addMathTopics
];

// Consolidate all questions
const questions = {
    ...g1Questions,
    ...g2Questions,
    ...g3Questions,
    ...addMathQuestions
};

export { topics, questions };
