
export interface HomeCatalogCard {
    title: string;
    developer: string;
    image: string;
    price: string;
    description: string;
    addToCart?(): void;
}