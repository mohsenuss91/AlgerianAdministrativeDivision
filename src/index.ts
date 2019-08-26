require('module-alias/register');
import { Wilaya, Baladiya, Daira }  from '@/dataset';
import { parseJsonFile, getJsonLocation, isArabic, checkStringNumber } from '@/helpers/parsers';


const datastack = parseJsonFile(getJsonLocation("Algeria"));
export const Wilayas: Wilaya[] = datastack;


export const getByWilaya = (searchFor: string): Wilaya | undefined => {
    let language: "french" | "arabic" = "french";
    if(isArabic(searchFor))
        language = "arabic";

    return Wilayas.find((wilayaObj: Wilaya) => (wilayaObj[language] == searchFor));
}

export const getByMaticule = (matricule: string): Wilaya | undefined => {
    checkStringNumber(matricule, "matrilcule");
    return Wilayas.find(( wilayaObj: Wilaya ) => (wilayaObj.matricule == matricule));
}

export const getByCallingCode = (callingCode: string): Wilaya | undefined => {
    checkStringNumber(callingCode, "calling code");
    return Wilayas.find(( wilayaObj: Wilaya ) => (wilayaObj.matricule == callingCode));
}