import React from 'react';
import {Col, Row} from "react-bootstrap";
import LoadingIndicator from "../components/LoadingIndicator";
import {ResponseTypeEnum} from "../../models/ResponseTypeEnum";
import {FaAngry, FaCheck, FaTimes} from 'react-icons/fa';


export default function Results({
                                    loading,
                                    response,
                                    query
                                }){

    if (loading)
        return <LoadingIndicator/>

    return (
        <div className={'pb-5'}>
            <hr className={"mt-5"}/>
            <Row>
                <Col md={6}>
                    <h5>Query: {query}</h5>
                </Col>
                <Col md={6}>
                    {
                        response.response_type === ResponseTypeEnum.PROVED &&
                        <span className={'text-success'}>
                            <h5 className={'d-inline mx-3'}>Proved</h5>
                            <FaCheck size={24} />
                        </span>
                    }
                    {
                        response.response_type === ResponseTypeEnum.NOT_PROVED &&
                        <span className={'text-danger'}>
                            <h5 className={'d-inline mx-3'}>Not proved</h5>
                            <FaTimes size={24} />
                        </span>                    }
                    {
                        response.response_type === ResponseTypeEnum.SYNTAX_ERROR &&
                        <span className={'text-warning'}>
                            <h5 className={'d-inline mx-3'}>Syntax Error</h5>
                            <FaAngry size={24} />
                        </span>
                    }
                </Col>
            </Row>
            {
                response.content?.length > 0 &&
                <>
                    <Row className={"mt-5"}>
                        <Col>
                            <span className={'font-weight-bold'}> {response.content.length} bindings </span>
                        </Col>
                    </Row>
                    {
                        response.content.map(el =>
                            <>
                                <hr/>
                                {
                                    Object.keys(el).map(key =>
                                        <Row>
                                            <Col>
                                                {key} : {el[key]}
                                            </Col>
                                        </Row>
                                    )
                                }
                            </>
                        )
                    }
                </>
            }
        </div>
    )
}

