import React, {Component} from "react";

const asyncLoader = _Component =>
{
	class AsyncLoader extends Component {
		isUnm = false
		state = {
			component: null
		}

		async componentDidMount()
		{
			const {default: component} = await _Component()
			if (!this.isUnm)
			{
				this.setState({
					component: component
				})
			}
		}

		componentWillUnmount()
		{
			this.isUnm = true
		}

		render()
		{
			const C = this.state.component
			return C ? <C {...this.props} /> : null;
		}
	}

	return AsyncLoader
}
export default asyncLoader