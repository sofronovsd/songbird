export const isCorrect = (question, bird) => {
    return question && bird && question.name === bird.name;
}