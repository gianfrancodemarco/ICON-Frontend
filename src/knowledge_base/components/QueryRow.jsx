import React from 'react';
import {Col, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function QueryRow({
    title,
    query,
    setQuery,
    disabled,
    prove_1_goal_click,
    prove_goal_click
}){

    const prove_1_goal_click_inner = () => {
        setQuery(query)
        prove_1_goal_click(query)
    }

    const prove_goal_click_inner = () => {
        setQuery(query)
        prove_goal_click(query)
    }

    return (
        <>
            <Row className={"mt-4"}>
                <Col>
                    <h6>{title}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormControl
                        placeholder="Type your query here..."
                        aria-label="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        disabled={disabled}
                    />
                </Col>
                <Col>
                    <Button
                        className={"mx-3"}
                        variant="primary"
                        onClick={prove_1_goal_click_inner}
                    >
                        Prove 1 goal
                    </Button>
                    <Button
                        className={"mx-3"}
                        variant="primary"
                        onClick={prove_goal_click_inner}
                    >
                        Prove goal
                    </Button>
                </Col>
            </Row>
        </>
    )
}

