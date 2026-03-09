// This is a helper for me to generate questions quickly
const generateQuestion = (text, options, correctIdx, explanation, xp = 10, difficulty = 'medium') => {
    // Basic validation to catch errors early
    if (typeof text !== 'string' || !text.trim()) {
        console.error('Invalid question text:', text);
    }
    if (!Array.isArray(options) || options.length < 2) {
        console.error('Invalid options for question:', text);
    }
    if (typeof correctIdx !== 'number' || correctIdx < 0 || correctIdx >= options.length) {
        console.error('Invalid correct index for question:', text, correctIdx);
    }

    return {
        text: text || 'Missing question text',
        options: Array.isArray(options) ? options : ['Error', 'Error'],
        correctAnswer: typeof correctIdx === 'number' ? correctIdx : 0,
        explanation: explanation || 'No explanation provided.',
        xpReward: xp,
        difficulty
    };
};

export { generateQuestion };
