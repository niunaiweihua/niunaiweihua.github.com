import React from "react";
import MetaTags from 'react-meta-tags';

export default class Home extends React.Component {
	componentDidMount()
	{
		
	}

	componentWillUnmount()
	{
		
	}

	render()
	{
		return (
            <div className="wrapper">
                <MetaTags>
                    <meta name="description" content="Home page meta description" />
                    <meta name="keywords" content="Home page meta keywords" />
                </MetaTags>
                <div>home new</div>
            </div>
            
		)

	}
}