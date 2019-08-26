var wilayas = require('@/');

// arabic: string;
// french: string;
// Baladiyas


const checkDairas = ( wilaya, key, checks ) => {
    let {Dairas} = wilaya;
    let invalids = [];
    if(checks == "arrays")
        invalids = Dairas.filter( daira => (! Array.isArray( daira[key])  ));
    else
        invalids = Dairas.filter( daira => (!daira[key]));
    return (invalids.length > 0)
}

describe("tests the fidelity of Dairas", () => {
    it("tests Daira has french and arabic", () => {
        let invalidFrenchValues = wilayas.Wilayas.filter((wilaya) =>  checkDairas(wilaya, "french", null));
        let invalidArabicValues = wilayas.Wilayas.filter((wilaya) =>  checkDairas(wilaya, "arabic", null));
        expect(invalidFrenchValues.length).toEqual(0);
        expect(invalidArabicValues.length).toEqual(0);
    });

    it("tests Daira has Baladiyas values", () => {
        let baladiaysNotFould = wilayas.Wilayas.filter((wilaya) =>  checkDairas(wilaya, "Baladiyas", null));
        let baladiaysNotArray = wilayas.Wilayas.filter((wilaya) =>  checkDairas(wilaya, "Baladiyas", "arrays" ));
        
        expect( baladiaysNotFould.length ).toEqual(0);
        expect( baladiaysNotArray.length ).toEqual(0);
    });
});