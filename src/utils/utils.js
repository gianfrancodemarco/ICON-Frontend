export function formatQuery(sourceQuery) {

    let query = ""
    const predicate = sourceQuery.substring(0, sourceQuery.indexOf("("))
    const innerQuery = sourceQuery.substring(sourceQuery.indexOf("(") + 1, sourceQuery.indexOf(")"))
    const items = innerQuery.split(",").map(el => el.trim()).map(el => el[0] === "$" ? el : ('"' + el + '"'))
    query = predicate + "(" + items.join(",") + ")"
    return query
}


