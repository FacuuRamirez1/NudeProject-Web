export type Section = {
    id: number;
    title: string;
    slug: string;
    image: image
    faqArticles: Articles
};

export type image = {
    id: number;
    url: string;
}

export type Articles = {
    count: number;
}