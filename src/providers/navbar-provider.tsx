'use client'

import { createContext, useState } from 'react'
import type * as I from '../helpers/interface';
import { getUserFromLocalStorage } from '~/service/userLocalstorage';
import { getResultFromLocalStorage } from '~/service/quizLocalStorage';

export const NavbarContext = createContext<I.NavbarProps>({} as I.NavbarProps);

type IProvider = {
    children: React.ReactNode
};
export default function NavbarProvider({ children }: IProvider) {
    const [user, setUser] = useState<string>(() => getUserFromLocalStorage());
    const [, setQuizResult] = useState<I.QuizResultProps>(
        getResultFromLocalStorage()
    );

    return (
        <NavbarContext.Provider value={{ user, setUser, setQuizResult }}>
            {children}
        </NavbarContext.Provider>
    )
}