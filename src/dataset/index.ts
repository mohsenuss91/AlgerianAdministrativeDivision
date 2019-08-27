
export type Baladiya = {
    arabic: string;
    french: string;
}

export type Daira = {
    arabic: string;
    french: string;
    Baladiyas: Baladiya[]
}

export type Wilaya = {
    arabic: string;
    french: string;
    matricule: string;
    phoneCodes: string[];
    Dairas: Daira[];
}