describe('La fonction choisirTroupes()', function() {
    it("doit retourner un ninja pour battre le samourai solitaire", function() {
        expect(choisirArmee([
            ['samourai']
        ])).toEqual([
            ['ninja']
        ])
    })

    it("doit retourner 3 tableaux contenant un ninja chacun pour vaincre les 3 tableaux de 1 samourai", function() {
        expect(choisirArmee([
            ['samourai'],
            ['samourai'],
            ['samourai']
        ])).toEqual([
            ['ninja'],
            ['ninja'],
            ['ninja']
        ])
    })

    it("doit retourner un tableau avec un ninja suivi d'un moine, et un autre tableau avec un samourai suivi d'un ninja, pour battre l'armée adverse", function() {
        expect(choisirArmee([
            ['samourai', 'ninja'],
            ['moine', 'samourai']
        ])).toEqual([
            ['ninja', 'moine'],
            ['samourai', 'ninja']
        ])
    })

    it("doit pouvoir vaincre une armée asymétrique (tableaux de différentes tailles)", function() {
        expect(choisirArmee([
            ['samourai'],
            ['ninja', 'moine', 'moine'],
            ['ninja', 'ninja']
        ])).toEqual([
            ['ninja'],
            ['moine', 'samourai', 'samourai'],
            ['moine', 'moine']
        ])
    })
})