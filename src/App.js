import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import MainRoute from "./router";


const appServer = "https://elevensportsukstage.neulion.com";


class app extends React.Component{
    render(){
        return (
            <Router>
                <React.Fragment>
                    <MainRoute />
                </React.Fragment>
            </Router>
        )
    }

    
    
};

export default app;