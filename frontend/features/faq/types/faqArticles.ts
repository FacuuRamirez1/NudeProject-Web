
export type Articles = {
    id: number,
    title: string,
    slug: string,
    excerpt: string,
    content: ArticleContent[],
    faqSection: faqSection,
};

export type faqSection = {
    id: number,
    title: string,
    slug: string,
}


export type Text = {
    id: number,
    text: string,
    __component: 'shared.text-block',
};

export type Button = {
    id: number,
    label: string,
    href: string,
    __component: 'shared.button',
};

export type FirstParagraph = {
    id: number,
    importantPhrase: string,
    __component: 'shared.firstPharagraph'
};

export type ArticleContent = Text | Button | FirstParagraph;