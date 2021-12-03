describe('La fonction jeuneConducteur()', function() {
    it("doit retourner false si l'année d'obtention du permis est 2012", function() {
        expect(jeuneConducteur(2012, false)).toBe(false)
    })

    it("doit retourner true si l'année d'obtention du permis est 2020", function() {
        expect(jeuneConducteur(2020, false)).toBe(true)
    })

    it("doit retourner true si l'année d'obtention du permis est 2019 et que la personne n'a pas été en conduite accompagnée", function() {
        expect(jeuneConducteur(2019, false)).toBe(true)
    })

    it("doit retourner false si l'année d'obtention du permis est 2019 et que la personne a été en conduite accompagnée", function() {
        expect(jeuneConducteur(2019, true)).toBe(false)
    })
})

describe('La fonction peutConduire()', function() {
    it("doit retourner true si le taux d'alcoolémie est égal à 0.15g/l", function() {
        expect(peutConduire(0.15, true)).toBe(true)
    })

    it("doit retourner false si le taux d'alcoolémie est égal à 0.2g/l et que la personne est jeune conducteur(trice)", function() {
        expect(peutConduire(0.2, true)).toBe(false)
    })

    it("doit retourner true si le taux d'alcoolémie est égal à 0.2g/l et que la personne n'est pas jeune conducteur(trice)", function() {
        expect(peutConduire(0.2, false)).toBe(true)
    })

    it("doit retourner false si le taux d'alcoolémie est égal à 0.5g/l", function() {
        expect(peutConduire(0.5, false)).toBe(false)
    })
})
