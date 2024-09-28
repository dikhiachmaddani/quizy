import { useEffect, useState } from "react";
import { displayCountDown } from "~/helpers/helpers";
import { getCountdownFromLocalStorage } from "~/service/quizLocalStorage";

type CountDownProps = {
    questionIndex: number;
    isTimeOut: () => void;
}

export default function CountDown({ questionIndex, isTimeOut }: CountDownProps) {
    const [countdown, setCountdown] = useState<number>(
        getCountdownFromLocalStorage()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountDown) => prevCountDown - 1);
            localStorage.setItem('countdown', `${countdown}`);
            if (countdown === 0) {
                isTimeOut();
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className='flex flex-row justify-between gap-0 mb-5'>
            <div className=' text-center'>
                <span className='bg-[#2B1E50] text-white p-2 text-xs rounded-lg'>Question {questionIndex + 1}/10</span>
            </div>
            <div className=' text-center'>
                <span className='bg-[#2B1E50] text-white p-2 text-xs rounded-lg'>Time Remaining: {displayCountDown(countdown)}</span>
            </div>
        </div>
    )
}