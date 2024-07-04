export interface CarparkInfo {
    results: Result[];
}

export interface Result {
    park_Id: string;
    name: string;
    displayAddress: string;
    district?: string;
    renditionUrls?: RenditionUrls;
    latitude: number;
    longitude: number;
}

export interface RenditionUrls {
    square?: string;
    thumbnail?: string;
    banner?: string;
    carpark_photo?: string;
}