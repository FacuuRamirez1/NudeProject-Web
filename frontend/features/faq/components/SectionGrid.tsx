import { Section } from "../types/faqSection"
import { SectionCard } from "./SectionCard";

interface Prop {
    sections: Section[];
}

export const SectionGrid = ({ sections }: Prop) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] h-full">
            {sections.map((section) => {
                return <SectionCard key={section.id} section={section}/>
            })}
        </div>
    )
}