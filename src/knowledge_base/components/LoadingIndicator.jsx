import * as React from "react"
import Loader from "react-loader-spinner";

export default function LoadingIndicator(){

    return (
        <div className={"loader-container"}>
            <Loader
                type="Puff"
                color="#00BFFF"
                visible={true}
            />
        </div>
    );

}
