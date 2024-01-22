export async function wget(token) {
    //await console.log("token", token);
    return await fetch("https://api.tureng.com/v1/dictionary/enfr/" + token)
        .then(res => res.json())
}

export async function wapi(d) {
    if (d.IsFound)
        return d.AResults.filter(a => allowSlang || !a.IsSlang
        ).map(cube => {
            return cube.TermB
        })
}

export async function debug(token) {
    //await console.log("token", token);
    return await fetch("https://api.tureng.com/v1/dictionary/enfr/" + token)
        .then(res => res.json())
        .then(d => d.IsFound)
}

export function wfound(d) {
    return d.IsFound;
}