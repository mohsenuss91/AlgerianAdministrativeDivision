var wilayas = require('@/');


describe("tests search functions for raw data", () => {
    it("test getByWilaya for Oum El Bouaghi", () => {
        const arabicValue = "أم البواقي";
        const frenchValue = "Oum El Bouaghi";
        const matriculeValue = "04";
        let wilaya = wilayas.getByWilaya(frenchValue);

        expect(wilaya.french).toEqual(frenchValue);
        expect(wilaya.arabic).toEqual(arabicValue);
        expect(wilaya.matricule).toEqual(matriculeValue);
        expect(wilaya.Dairas.length).toEqual(12);
        expect(wilaya.phoneCodes[0]).toEqual("32");
    });

    it("test getByMaticule for Biskra", () => {
        const arValue = "بسكرة";
        const frValue = "Biskra";
        const matValue = "07";
        const longitude = 5.751047499999999;
        const latitude = 34.8370347;
        let wilaya = wilayas.getByMatricule(matValue);

        expect(wilaya.french).toEqual(frValue);
        expect(wilaya.arabic).toEqual(arValue);
        expect(wilaya.matricule).toEqual(matValue);
        expect(wilaya.Dairas.length).toEqual(11);
        expect(wilaya.phoneCodes[0]).toEqual("33");
        expect(wilaya.longitude).toEqual(longitude);
        expect(wilaya.latitude).toEqual(latitude);
    });

    it("test single callingCode for Setif", () => {
        const arValue = "سطيف";
        const frValue = "Setif";
        const matValue = "19";
        const wilaya = wilayas.getByCallingCode("36");
        expect(wilaya.arabic).toEqual(arValue);
        expect(wilaya.french).toEqual(frValue);
        expect(wilaya.matricule).toEqual(matValue);
        expect(wilaya.Dairas.length).toEqual(0);
        expect(wilaya.phoneCodes.length).toEqual(1);
    });

    it("test multiple callingCode for Alger", () => {
        const arValue = "الجزائر";
        const frValue = "Alger";
        const matValue = "16";
        const wilaya1 = wilayas.getByCallingCode("23");
        const wilaya2 = wilayas.getByCallingCode("21");
        
        expect(wilaya1.arabic).toEqual(arValue);
        expect(wilaya1.french).toEqual(frValue);
        expect(wilaya1.matricule).toEqual(matValue);
        expect(wilaya1.phoneCodes.length).toEqual(2);
        expect(JSON.stringify(wilaya1)).toEqual(JSON.stringify(wilaya2));

    });
});
