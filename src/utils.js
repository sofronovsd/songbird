export const checkIsCorrect = (question, bird) => {
    return question && bird && question.name === bird.name;
}