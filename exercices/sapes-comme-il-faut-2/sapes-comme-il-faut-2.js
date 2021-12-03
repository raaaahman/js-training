/*
    Le client est un objet avec quatre propriétés, exemple:
    const client = {
        tete: 'casquette',
        torse: 'chemise',
        jambes: 'culotte courte',
        pieds: 'mocassins'
    }
*/

function sapesMousse(client) {
    if (client.jambes === '') {
        return false
    }

    return true
}

function sapesPirate(client) {
    if (client.torse === 't-shirt') {
        return false
    }

    return true
}