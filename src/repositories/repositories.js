import {formatQuery} from "../utils/utils";

const axios = require('axios').default;

const BASE_URL = "http://127.0.0.1:5000"

export function prove_1_goal(query){
    const url = BASE_URL + "/prove_1_goal"
    query = formatQuery(query)

    return axios.post(url, {query})
}

export function prove_goal(query){
    const url = BASE_URL + "/prove_goal"
    query = formatQuery(query)

    return axios.post(url, {query})
}

