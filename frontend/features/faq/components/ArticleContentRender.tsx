import { ArticleContent } from "../types/articleContent";
import { ButtonBlock } from "./ButtonBlock";
import { FirstParagraph } from "./FirstParagraph";
import { TextBlock } from "./TextBlock";

type Props = {
    content: ArticleContent[];
}

export function ArticleContentRender({ content }: Props) {
    return (
        <>
            {content.map((component) => {
                switch (component.__component) {
                    case "shared.text-block":
                        return <TextBlock key={component.id} text={component.text}/>;
                    
                    case "shared.button":
                        return <ButtonBlock key={component.id} {...component}/>

                    case "shared.firstPharagraph":
                        return <FirstParagraph key={component.id} {...component}/>
                }
            })}
        </>
    )
}