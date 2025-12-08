import type { Cause, Product } from "@/types/product";

export const causes: Cause[] = [
    {
        id: "cause-youth-literacy",
        name: "Youth Literacy",
        slug: "youth-literacy",
        description: "Funding after-school reading programs and books for kids.",
    },
    {
        id: "cause-local-arts",
        name: "Local Arts",
        slug: "local-arts",
        description: "Supporting local poets, illustrators, and community art events."
    },
    {
        id: "cause-banned-books",
        name: "Banned Books Initiatives",
        slug: "banned-books",
        description: "Backing organizations that fight book bans and censorship.",
    },
];

export const products: Product[] = [
    {
        id: "prod-midnight-manuscript",
        name: "Midnight Manuscript Blend",
        slug: "midnight-manuscript-blend",
        price: 18,
        imageUrl: "/images/midnight-manuscript.jpg",
        category: "coffee",
        causeId: "cause-youth-literacy",
        description: "A dark roast coffee that funds after-school reading programs.",
        isFeatured: true,
    },
    {
        id: "prod-banned-book-brew",
        name: "Banned Book Brew",
        slug: "banned-book-brew",
        price: 20,
        imageUrl: "/images/banned-book-brew.jpg",
        category: "coffee",
        causeId: "cause-banned-books",
        description: "A bold coffee blend supporting banned books initiatives.",
        isFeatured: true,
    },
    {
        id: "prod-spoken-word-mug",
        name: "Spoken Word Mug",
        slug: "spoken-word-mug",
        price: 16,
        imageUrl: "/images/spoken-word-mug.jpg",
        category: "merch",
        causeId: "cause-local-arts",
        description: "A cozy mug that supports local poets and artists.",
        isFeatured: true,
    },
    {
        id: "prod-zine-anthology",
        name: "Dead Poets Zine Anthology",
        slug: "dead-poets-zine-anthology",
        price: 12,
        imageUrl: "/images/dead-poets-zine.jpg",
        category: "zine",
        causeId: "cause-local-arts",
        description: "A collection of poems from local writers, funding community workshops.",
    }
]