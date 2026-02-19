import { FirstParagraph as FirstText } from "../types/faqArticles";


export function FirstParagraph ({ importantPhrase }: FirstText) {
    return (
        <p className="text-bold text-[#492A23]">
            {importantPhrase}
        </p>
    )
}