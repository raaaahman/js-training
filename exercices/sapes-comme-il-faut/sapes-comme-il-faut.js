/*
    Le client est un objet avec quatre propriétés, exemple:
    const client = {
        tete: 'casquette',
        torse: 'chemise',
        jambes: 'jean',
        pieds: 'mocassins'
    }
*/

function sapesDecemment(client) {
    if (client.jambes === '') {
        return false
    }

    return true
}

function sapesClasse(client) {
    if (client.torse === 't-shirt') {
        return false
    }

    return true
}