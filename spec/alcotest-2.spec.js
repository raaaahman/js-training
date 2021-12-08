describe('La fonction immobiliserVehicule()', function() {
    it("doit retourner true si l'unique passager a un taux d'alcoolémie de 0.5g/l", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.5,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                }
            ],
            true
        )).toBe(true)
    })

    it("doit retourner false si l'unique passager a un taux d'alcoolémie de 0g/l et son permis de conduire", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0,
                    permis: {
                        anneeObtention: 2015,
                        conduiteAccompagnee: false
                    }
                }
            ],
            false
        )).toBe(false)
    })

    it("doit retourner true si l'unique passager a un taux d'alcoolémie de 0.2g/l et qu'il est jeune conducteur", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.2,
                    permis: {
                        anneeObtention: 2020,
                        conduiteAccompagnee: true
                    }
                }
            ],
            true
        )).toBe(true)
    })

    it("doit retourner true si l'unique passager a un taux d'alcoolémie de 0g/l, qu'il est jeune conducteur, et qu'il n'a pas son disque 'A'", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0,
                    permis: {
                        anneeObtention: 2020,
                        conduiteAccompagnee: true
                    }
                }
            ],
            false
        )).toBe(true)
    })

    it("doit retourner true si aucun passager n'a son permis de conduire, même s'ils sont tous sobre", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                }
            ],
            true
        )).toBe(true)
    })

    it("doit retourner false si un passager a un taux d'alcoolémie de 0.5g/l mais qu'un autre peut le remplacer", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.5,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: {
                        anneeObtention: 2015,
                        conduiteAccompagnee: false 
                    }
                }
            ],
            false
        )).toBe(false)
    })

    it("doit retourner true si un seul des passagers a son permis de conduire et que son taux d'alcoolémie est de 0.5g/l", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.5,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                }
            ],
            true
        )).toBe(true)
    })

    it("doit retourner true un des passagers a un taux d'alcoolémie de 0g/l, mais qu'il est jeune conducteur alors que la voiture n'est pas équipée d'un disque 'A'", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.5,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: {
                        anneeObtention: 2019,
                        conduiteAccompagnee: false
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                }
            ],
            false
        )).toBe(true)
    })

    it("doit retourner false si un des passagers a un taux d'alcoolémie de 0g/l, qu'il est jeune conducteur depuis deux ans après une période de conduite accompagnée, et que la voiture est équipée d'un disque 'A'", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.5,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: {
                        anneeObtention: 2020,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0,
                    permis: undefined
                }
            ],
            true
        )).toBe(false)
    })

    it("doit retourner true si tout le monde est bourré (vive la Bretagne!)", function() {
        expect(immobiliserVehicule(
            [
                {
                    tauxAlcoolemie: 0.8,
                    permis: {
                        anneeObtention: 2012,
                        conduiteAccompagnee: true
                    }
                },
                {
                    tauxAlcoolemie: 0.8,
                    permis: {
                        anneeObtention: 2019,
                        conduiteAccompagnee: false
                    }
                },
                {
                    tauxAlcoolemie: 0.8,
                    permis: undefined
                }
            ],
            true
        )).toBe(true)
    })
})