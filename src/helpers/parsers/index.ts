import * as fs from 'fs';
import { resolve } from 'path';


export const getJsonLocation = (filename: string): string => {    
    return  resolve("@/", "..", `${ filename }.json`);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const isArabic = (text: string): boolean => {
    const textLower = text.toLowerCase();
    const alphas = alphabet.toLowerCase().split('')

    for (let index = 0; index < alphas.length; index++) {
        const element = alphas[index];
        if(textLower.includes(element))
            return false;
    }
    return true;
}

export const checkStringNumber = (stringNumber: string, variableName: string) => {
    try{
        parseInt(stringNumber);
    }catch(error) {
        throw `${variableName} ${ stringNumber } needs to be a number in string format`;
    }
}

export const parseJsonFile = (file_location: string) => {
    let data = null;
    let exists = fs.existsSync(file_location);

    if(exists) {
        let content = fs.readFileSync(file_location, { encoding: 'utf8' });
        data = JSON.parse(content.toString());
    }
    else
        throw `Fialed to find ${ file_location }`;

    return data;
}