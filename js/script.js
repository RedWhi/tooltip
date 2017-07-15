class Tooltip extends React.Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { opacity: false };
	}

	toggle() {
		const tooltipNode = ReactDOM.findDOMNode(this);
		this.setState({
			opacity: !this.state.opacity,
			top: tooltipNode.offsetTop,
			left: tooltipNode.offsetLeft
		});
	}

	render() {
		const style = {
			zIndex: this.state.opacity ? 1000 : -1000,
			opacity: +this.state.opacity,
			top: (this.state.top || 0) + 20,
			left: (this.state.left || 0) - 30
		};

		return React.createElement(
			"div",
			{ style: { display: "inline" } },
			React.createElement(
				"span",
				{ style: { color: "blue" },
					onMouseEnter: this.toggle,
					onMouseOut: this.toggle
				},
				this.props.children
			),
			React.createElement(
				"div",
				{ className: "tooltip bottom", style: style },
				React.createElement(
					"div",
					{ className: "tooltip-arrow" },
					" "
				),
				React.createElement(
					"div",
					{ className: "tooltip-inner" },
					this.props.text
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(
	"div",
	null,
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo, adipisci fugiat eveniet facilis. Impedit quos, minima expedita enim eos, repellat eaque recusandae laboriosam beatae sed velit consectetur consequatur libero!",
	React.createElement(
		Tooltip,
		{ text: "Message of tooltip" },
		" \u041F\u043E\u043B\u0435 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u0430, \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0449\u043E\u0433\u043E tooltip "
	)
), document.getElementById('content'));
