
export interface NewsModel {
    articles: Array<{
        author: string;
        content: string;
        description: string
        publishedAt: string;
        title: string;
        url: string;
        urlToImage: string
    }>;
    status: string;
    totalResults: number;
}