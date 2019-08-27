export declare type Baladiya = {
    arabic: string;
    french: string;
};
export declare type Daira = {
    arabic: string;
    french: string;
    Baladiyas: Baladiya[];
};
export declare type Wilaya = {
    arabic: string;
    french: string;
    matricule: string;
    phoneCodes: string[];
    Dairas: Daira[];
};
