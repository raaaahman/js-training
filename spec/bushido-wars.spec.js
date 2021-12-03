describe('La fonction choisirTroupes()', function() {
    it("doit retourner un ninja pour battre le samourai solitaire", function() {
        expect(choisirTroupes(['samourai'])).toEqual(['ninja'])
    })

    it("doit retourner 7 ninjas pour vaincre les 7 samourais", function() {
        expect(choisirTroupes([
            'samourai',
            'samourai',
            'samourai',
            'samourai',
            'samourai',
            'samourai',
            'samourai'
        ])).toEqual([
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja'
        ])
    })

    it("doit retourner des moines pour vaincre le clan des ninjas", function() {
        expect(choisirTroupes([
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja',
            'ninja'
        ])).toEqual([
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine',
            'moine'
        ])
    })

    it("doit vaincre l'armée composée de moines et samourais", function() {
        expect(choisirTroupes([
            'moine',
            'samourai',
            'samourai',
            'moine',
            'samourai',
        ])).toEqual([
            'samourai',
            'ninja',
            'ninja',
            'samourai',
            'ninja'
        ])
    })

    it("doit vaincre une armée composée de moines, ninjas et samourais", function() {
        expect(choisirTroupes([
            'ninja',
            'moine',
            'ninja',
            'samourai',
            'moine',
            'ninja',
            'samourai'
        ])).toEqual([
            'moine',
            'samourai',
            'moine',
            'ninja',
            'samourai',
            'moine',
            'ninja'
        ])
    })
})