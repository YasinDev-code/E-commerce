export type productType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: { [key: string]: string };
}

export type productsType = productType[]

export interface HomePageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export interface ProductPageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}