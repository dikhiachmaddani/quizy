import { ReactNode, useContext } from 'react';
import Image from 'next/image';
import { BsFillCaretDownFill } from "react-icons/bs";
import { create } from 'zustand'
import { NavbarContext } from '~/providers/navbar-provider';
import { useRouter } from 'next/navigation';
import { resetQuizResult } from '~/helpers/helpers';
import { clearLocalStorage } from '~/service/quizLocalStorage';

type StateDropdown = {
    isOpen: boolean
}

type ActionDropdown = {
    toggleDropdown: () => void
}

const useDropdownStore = create<StateDropdown & ActionDropdown>((set) => ({
    isOpen: false,
    toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
}))

interface CustomLayoutProps {
    children: ReactNode;
    customPadding?: number;
}

const today = new Date();

const CustomLayout = ({ children, customPadding }: CustomLayoutProps) => {
    const isOpen = useDropdownStore((state) => state.isOpen);
    const toggleDropdown = useDropdownStore((state) => state.toggleDropdown);
    const { user, setUser, setQuizResult } = useContext(NavbarContext);
    const router = useRouter();

    const onLogoutHandler = () => {
        clearLocalStorage();
        setUser('');
        router.push('/');
        resetQuizResult(setQuizResult);
    };

    return (
        <main className="grid grid-cols-12 h-screen gap-5 bg-[#FBF5FB] p-3">
            <section
                className="col-span-12 lg:col-span-6 flex items-center relative"
                style={{ padding: customPadding ? `${customPadding}px` : '20px' }}
            >
                {/* header */}
                {
                    user !== "" ? (
                        <div className='absolute flex justify-between top-0 left-0 right-0 py-6 px-4'>
                            <h1 className='text-[#2B1E50] font-bold text-xl'>QQ</h1>
                            <div className='relative text-[#2B1E50]'>
                                <button className='flex flex-row justify-center items-center gap-3' onClick={toggleDropdown}>
                                    <p className='font-semibold text-md'>Hallo, {user}!</p>
                                    <BsFillCaretDownFill className={isOpen ? 'rotate-180' : ''} />
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-lg">
                                        <ul className="py-1">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onLogoutHandler}>Logout</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : null
                }

                {/* main */}
                {children}
                {/* end main */}

                {/* footer */}
                <div className='absolute bottom-5 left-0 right-0'>
                    <p className='text-[#2B1E50] text-sm font-semibold text-center'>© {today.getFullYear()} Dikhi Achmad Dani. All Rights Reserved.</p>
                </div>
                {/* end footer */}
            </section>
            <section className='relative col-span-12 lg:col-span-6 rounded-3xl overflow-hidden hidden lg:block'>
                <Image
                    src="/assets/bg.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </section>
        </main>
    );
};

export default CustomLayout;
