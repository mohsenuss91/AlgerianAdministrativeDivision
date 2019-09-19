export declare type Baladiya = {
    arabic: string;
    french: string;
    latitude: number;
    longitude: number;
};
export declare type Daira = {
    arabic: string;
    french: string;
    Baladiyas: Baladiya[];
    latitude: number;
    longitude: number;
};
export declare type Wilaya = {
    arabic: string;
    french: string;
    matricule: string;
    phoneCodes: string[];
    Dairas: Daira[];
    latitude: number;
    longitude: number;
};
