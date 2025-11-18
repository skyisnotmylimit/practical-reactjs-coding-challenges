import { pronouns } from '../data/pronouns';
export type resultDataType = {
    words: number;
    sentences: number;
    characters: number;
    paragraphs: number;
    pronouns: number;
    averageReadTime: string;
    longestWord: string;
};

export const calculateData = (text: string): resultDataType => {
    const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text.trim().length === 0 ? 0 : text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphs = text.trim().length === 0 ? 0 : text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    const pronounsCount = text
        .toLowerCase()
        .split(/\s+/)
        .reduce((count, word) => pronouns.includes(word) ? count + 1 : count, 0);
    const averageReadTime = words === 0 ? 0 : parseFloat((words / 200).toFixed(2));
    const longestWord = text
        .split(/\s+/)
        .reduce((longest, word) => word.length > longest.length ? word : longest, "");
    const formatedAverageReadTime = averageReadTime < 1 ? averageReadTime === 0 ? "" : "~1 mins" : averageReadTime + " mins";
    return {
        words,
        sentences,
        characters,
        paragraphs,
        pronouns: pronounsCount,
        averageReadTime: formatedAverageReadTime,
        longestWord,
    };
};