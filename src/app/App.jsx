import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import KnowledgeBase from "../knowledge_base/KnowledgeBase";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import "./App.css"

export default function App() {
  return (
    <Container className="shadow lg mt-4 p-0 App">
        <Tabs defaultActiveKey="knowledge_base" id="uncontrolled-tab-example">
            <Tab eventKey="knowledge_base" title="Knowledge Base">
                <div className={'p-3 border-left'}>
                    <KnowledgeBase />
                </div>
            </Tab>
        </Tabs>
    </Container>
  );
}

