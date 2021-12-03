describe('La fonction sapesMousse()',function() {
    it("doit retourner false si le client est tout nu", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: '',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner true si le client porte un short de bain", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: 'short de bain',
            pieds: ''
        })).toBe(true)
    })

    it("doit retourner true si le client est en boxer de bain", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: 'boxer de bain',
            pieds: ''
        })).toBe(true)
    })

    it("doit retourner false si le client est en slip de bain", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: 'slip de bain',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner false si le client est en boxer (sous-vêtement)", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: 'boxer',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner true si la cliente est maillot de bain (mono-pièce)", function() {
        expect(sapesMousse({
            tete: '',
            torse: 'maillot de bain',
            jambes: 'maillot de bain',
            pieds: ''
        })).toBe(true)
    })

    it("doit retourner true si la cliente est bikini complet (torse et jambes)", function() {
        expect(sapesMousse({
            tete: '',
            torse: 'bikini',
            jambes: 'bikini',
            pieds: ''
        })).toBe(true)
    })

    it("doit retourner false si la cliente est en bikini topless", function() {
        expect(sapesMousse({
            tete: '',
            torse: '',
            jambes: 'bikini',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner false si la cliente n'a que le haut du bikini (???)", function() {
        expect(sapesMousse({
            tete: '',
            torse: 'bikini',
            jambes: '',
            pieds: ''
        })).toBe(false)
    })

    it("doit retourner false si la cliente est en soutien-gorge (sous-vêtement)", function() {
        expect(sapesMousse({
            tete: '',
            torse: 'soutien-gorge',
            jambes: 'bikini',
            pieds: ''
        })).toBe(false)
    })
})

describe('La fonction sapesPirate()',function() {
    it("doit retourner false si le client ne porte rien sur les jambes", function() {
        expect(sapesPirate({
            tete: '',
            torse: 'chemise',
            jambes: '',
            pieds: 'chaussures à boucles'
        })).toBe(false)
    })

    it("doit retourner true si la cliente porte trois vêtements de pirate sur trois", function() {
        expect(sapesPirate({
            tete: '',
            torse: 'plastron',
            jambes: 'robe flottante',
            pieds: 'mules'
        })).toBe(true)
    })

    it("doit retourner true si la cliente porte quatre vêtements de pirate", function() {
        expect(sapesPirate({
            tete: 'bicorne',
            torse: 'corset',
            jambes: 'jupons',
            pieds: 'escarpins'
        })).toBe(true)
    })

    it("doit retourner true si le client ne porte trois vêtements de pirate sur trois", function() {
        expect(sapesPirate({
            tete: '',
            torse: 'chemise',
            jambes: 'culotte courte',
            pieds: 'chaussures à boucles'
        })).toBe(true)
    })

    it("doit retourner true si la cliente porte quatre vêtements de pirate", function() {
        expect(sapesPirate({
            tete: 'perruque',
            torse: 'gilet',
            jambes: 'culotte courte',
            pieds: 'chaussures à boucles'
        })).toBe(true)
    })

    it("doit retourner true si la cliente porte deux vêtements de pirate sur trois", function() {
        expect(sapesPirate({
            tete: '',
            torse: 'débardeur',
            jambes: 'jupons',
            pieds: 'escarpins'
        })).toBe(true)
    })

    it("doit retourner false si le client ne porte qu'un vêtement de pirate sur trois", function() {
        expect(sapesPirate({
            tete: '',
            torse: 't-shirt',
            jambes: 'culotte courte',
            pieds: 'baskets'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte qu'un vêtement de pirate sur quatre", function() {
        expect(sapesPirate({
            tete: 'bandana',
            torse: 'blazer',
            jambes: 'short',
            pieds: 'tennis'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte que deux vêtements de pirate sur quatre", function() {
        expect(sapesPirate({
            tete: 'perruque',
            torse: 'veste',
            jambes: 'jean',
            pieds: 'mocassins'
        })).toBe(false)
    })

    it("doit retourner false si le client ne porte qu'un vêtement de pirate sur deux", function() {
        expect(sapesPirate({
            tete: '',
            torse: 'gilet',
            jambes: 'jean',
            pieds: ''
        })).toBe(false)
    })
})