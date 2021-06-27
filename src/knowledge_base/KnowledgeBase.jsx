import React, {useState} from 'react';
import {prove_1_goal, prove_goal} from "../repositories/repositories";
import QueryRow from "./components/QueryRow";
import Results from "./components/Results";
import useStateCallback from "./../utils/useStateCallback"

export default function KnowledgeBase(){


    const [query, setQuery] = useStateCallback("")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})


    const queryExample1 = 'acted(Harry Potter and the Goblet of Fire,Daniel Radcliffe)'
    const queryExample2 = 'acted($movie,Daniel Radcliffe)'
    const queryExample3 = 'co_acted(Rupert Grint,Daniel Radcliffe)'

    const prove_1_goal_click = (updatedQuery) => {
        setLoading(true)
        prove_1_goal(updatedQuery || query)
            .then((res) => setResponse(res.data))
            .finally(() => setLoading(false))
    }

    const prove_goal_click = (updatedQuery) => {
        setLoading(true)
        prove_goal(updatedQuery || query)
            .then((res) => setResponse(res.data))
            .finally(() => setLoading(false))
    }


    return (
        <>
            <QueryRow
                title={"Example 1 (facts base)"}
                prove_1_goal_click={prove_1_goal_click}
                prove_goal_click={prove_goal_click}
                query={queryExample1}
                setQuery={setQuery}
                disabled={true}
            />
            <QueryRow
                title={"Example 2 (facts base with variable)"}
                prove_1_goal_click={prove_1_goal_click}
                prove_goal_click={prove_goal_click}
                query={queryExample2}
                setQuery={setQuery}
                disabled={true}
            />
            <QueryRow
                title={"Example 3 (rule base)"}
                prove_1_goal_click={prove_1_goal_click}
                prove_goal_click={prove_goal_click}
                query={queryExample3}
                setQuery={setQuery}
                disabled={true}
            />
            <QueryRow
                title={"Free text query"}
                prove_1_goal_click={prove_1_goal_click}
                prove_goal_click={prove_goal_click}
                query={query}
                setQuery={setQuery}
            />
            <Results
                loading={loading}
                response={response}
                query={query}
            />
        </>
    )
}

