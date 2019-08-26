var wilayas = require('@/');
var wilayaParser = require('@/helpers/parsers');

describe("tests the fidelity of the data in Algerian Wilayas", () => {
    it("test wilayas equal 48 in number", () => {
        expect(wilayas.Wilayas.length).toEqual(48);
    });

    it("test all wilayas have arabic and french tags & are not empty", () => {
        let emptyArabicTags = wilayas.Wilayas.filter(wilaya => ((!wilaya.arabic) && (wilaya.arabic != "")));
        let emptyFrenchTags = wilayas.Wilayas.filter(wilaya => ((!wilaya.french) && (wilaya.french != "")));

        expect(emptyArabicTags.length).toEqual(0);
        expect(emptyFrenchTags.length).toEqual(0);
    });

    it("test all wilayas have matricule & callingCode", () => {
        let emptyMatrilcules = wilayas.Wilayas.filter( wilaya => (!wilaya.matricule));
        let emptyCallingCodes = wilayas.Wilayas.filter( wilaya => (!wilaya.phoneCodes));

        expect(emptyMatrilcules.length).toEqual(0);
        expect(emptyCallingCodes.length).toEqual(0);
    });

    it("test wilayas have Dairas array", () => {
        let invalidDairas = wilayas.Wilayas.filter( wilaya => (!Array.isArray(wilaya.Dairas)));
        expect(invalidDairas.length).toEqual(0);
    });

    it("test check Matricules are all numbers", () => {
        let invalidMatricules = wilayas.Wilayas.filter( wilaya => {
            try {
                wilayaParser.wilayaParser(wilaya.matricule, "matricule");
                return true;
            } catch(error) {
                return false;
            }
        });

        expect(invalidMatricules.length).toEqual(0);

    });

    it("test check Calling codes are all numbers", () => {
        let invalidPhoneCode = wilayas.Wilayas.filter( wilaya => {
            try {
                wilayaParser.wilayaParser(wilaya.phoneCodes[0], "Calling codes");
                return true;
            } catch(error) {
                return false;
            }
        });

        expect(invalidPhoneCode.length).toEqual(0);
    });
});

