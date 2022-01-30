export interface HomeCard {
    title: string;
    text: string;
    index?: number;
    setCardIndex?(): void;
}