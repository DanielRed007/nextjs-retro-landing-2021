
export interface CatalogItem{
    title: string;
    developer: string;
    image: string;
    price: string;
    description: string;
}

export interface CatalogItems extends Array<CatalogItem>{}