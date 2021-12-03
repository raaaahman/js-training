describe('La fonction sapesDecemment()',function() {
    it("doit retourner false si le client ne porte rien sur les jambes", function() {
        expect(sapesDecemment({
            tete: 'casquette',
            torse: 'chemise',
            jambes: '',
            pieds: 'tennis'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte rien sur le torse", function() {
        expect(sapesDecemment({
            tete: '',
            torse: '',
            jambes: 'jean',
            pieds: 'baskets'
        })).toBe(false)
    })

    it("doit retourner true si le client est en t-shirt, jean et baskets", function() {
        expect(sapesDecemment({
            tete: '',
            torse: 't-shirt',
            jambes: 'jean',
            pieds: 'baskets'
        })).toBe(true)
    })

    it("doit retourner true si la cliente est en débardeur, short et tennis", function() {
        expect(sapesDecemment({
            tete: '',
            torse: 'débardeur',
            jambes: 'short',
            pieds: 'tennis'
        })).toBe(true)
    })

    it("doit retourner false si le client est en caleçon", function() {
        expect(sapesDecemment({
            tete: '',
            torse: 't-shirt',
            jambes: 'caleçon',
            pieds: 'baskets'
        })).toBe(false)
    })

    it("doit retourner false si la cliente est en soutien-gorge", function() {
        expect(sapesDecemment({
            tete: '',
            torse: 'soutien-gorge',
            jambes: 'short',
            pieds: 'tennis'
        })).toBe(false)
    })
})

describe('La fonction sapesClasse()',function() {
    it("doit retourner false si le client ne porte rien sur les jambes", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'chemise',
            jambes: '',
            pieds: 'mocassins'
        })).toBe(false)
    })

    it("doit retourner false si le client est en caleçon", function() {
        expect(sapesClasse({
            tete: '',
            torse: 't-shirt',
            jambes: 'caleçon',
            pieds: 'baskets'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte rien sur le torse", function() {
        expect(sapesClasse({
            tete: '',
            torse: '',
            jambes: 'pantalon',
            pieds: 'mocassins'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte pas de chaussures", function() {
        expect(sapesClasse({
            tete: '',
            torse: '',
            jambes: 'pantalon',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner true si le client est en chemise, pantalon et mocassins", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'chemise',
            jambes: 'pantalon',
            pieds: 'mocassins'
        })).toBe(true)
    })

    it("doit retourner false si le client est en t-shirt, jean ou baskets", function() {
        expect(sapesClasse({
            tete: '',
            torse: 't-shirt',
            jambes: 'pantalon',
            pieds: 'mocassins'
        })).toBe(false)

        expect(sapesClasse({
            tete: '',
            torse: 'chemise',
            jambes: 'jean',
            pieds: 'mocassins'
        })).toBe(false)

        expect(sapesClasse({
            tete: '',
            torse: 'chemise',
            jambes: 'pantalon',
            pieds: 'baskets'
        })).toBe(false)
    })

    it("doit retourner false si le client porte une casquette", function () {
        expect(sapesClasse({
            tete: 'casquette',
            torse: 'chemise',
            jambes: 'pantalon',
            pieds: 'mocassins'
        })).toBe(false)
    })

    it("doit retourner false si la cliente est en soutien-gorge", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'soutien-gorge',
            jambes: 'jupe',
            pieds: 'talons hauts'
        })).toBe(false)
    })

    it("doit retourner true si la cliente est en tailleur, jupe et talons hauts", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'tailleur',
            jambes: 'jupe',
            pieds: 'talons hauts'
        })).toBe(true)
    })

    it("doit retourner true si la cliente est en robe et talons hauts", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'robe',
            jambes: 'robe',
            pieds: 'talons hauts'
        })).toBe(true)
    })

    it("doit retourner false si la cliente est en débardeur, short ou tennis", function() {
        expect(sapesClasse({
            tete: '',
            torse: 'débardeur',
            jambes: 'jupe',
            pieds: 'talons hauts'
        })).toBe(false)

        expect(sapesClasse({
            tete: '',
            torse: 'tailleur',
            jambes: 'short',
            pieds: 'talons hauts'
        })).toBe(false)

        expect(sapesClasse({
            tete: '',
            torse: 'tailleur',
            jambes: 'jupe',
            pieds: 'tennis'
        })).toBe(false)
    })
})