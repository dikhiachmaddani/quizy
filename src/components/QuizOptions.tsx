/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import type * as I from '../helpers/interface';
import Button from './form/Button';
import parse from 'html-react-parser';
import { getAnswersFromLocalStorage } from '~/service/quizLocalStorage';

interface QuizOptionsProps extends I.QuizAnswers {
    answers: string[];
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
    isEnded: () => void;
}
export const QuizOptions = ({
    answers,
    correct_answer,
    setQuestionIndex,
    setQuizResult,
    isEnded,
}: QuizOptionsProps) => {
    const CheckAnswer = (answer: string) => {
        const storageAnswers = getAnswersFromLocalStorage();
        localStorage.setItem(
            'answers',
            JSON.stringify([...storageAnswers, answer])
        );
        if (answer === correct_answer) {
            setQuizResult((prev) => {
                const resultData = { ...prev, correct: prev.correct + 1 };
                localStorage.setItem('result', JSON.stringify(resultData));
                return resultData;
            });
        } else {
            setQuizResult((prev) => {
                const resultData = { ...prev, wrong: prev.wrong + 1 };
                localStorage.setItem('result', JSON.stringify(resultData));
                return resultData;
            });
        }

        setQuestionIndex((prev: number) => {
            console.log(prev);

            localStorage.setItem('index', `${prev + 1}`);
            return prev + 1;
        });
        isEnded();
    };

    return (
        <div className={`grid grid-cols-12 flex-col gap-6 w-full`}>
            {answers.map((data, index) => (
                <div key={index} className="col-span-12 lg:col-span-6">
                    <Button style='border' color='black' width='full' key={index} title={String(parse(data))} onClick={() => CheckAnswer(data)} />
                </div>
            ))}
        </div>
    );
};