export const getQuestionsFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('questions');
  if (storedCountdown !== null) {
    return JSON.parse(storedCountdown);
  }
  return [];
};

export const getCountdownFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('countdown');
  if (storedCountdown !== null) {
    return parseInt(storedCountdown);
  }
  return 20;
};

export const getResultFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('result');
  if (storedCountdown !== null) {
    return JSON.parse(storedCountdown);
  }
  return {
    correct: 0,
    wrong: 0,
  };
};

export const getIndexFromLocalStorage = () => {
  const storedIndex = localStorage.getItem('index');
  if (storedIndex !== null) {
    return parseInt(storedIndex);
  }
  return 0;
};

export const getAnswersFromLocalStorage = () => {
  const storedAnswers = localStorage.getItem('answers');
  if (storedAnswers !== null) {
    return JSON.parse(storedAnswers);
  }
  return [];
};

export const clearLocalStorage = (keepUser: boolean = false) => {
  if (!keepUser) {
    localStorage.removeItem('user');
  }
  localStorage.removeItem('countdown');
  localStorage.removeItem('questions');
  localStorage.removeItem('index');
  localStorage.removeItem('result');
  localStorage.removeItem('answers');
};
