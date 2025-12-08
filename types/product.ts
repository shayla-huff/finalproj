export type Cause = {
    id: string;
    name: string;
    slug: string;
    description: string;
};

export type Product = {
    id: string;
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    category: "coffee" | "merch" | "zine";
    causeId: string;
    description: string;
    isFeatured?: boolean;
};