
import parse from 'html-react-parser';

interface QuizQuestionPanelProps {
    text: string;
}

export default function QuizQuestionPanel({ text }: QuizQuestionPanelProps) {
    return (
        <h1 className='text-3xl font-bold mb-10 text-center'>{parse(text)}</h1>
    )
}