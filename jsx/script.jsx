class Tooltip extends React.Component {
	
	constructor(props) {
	super(props)
	this.toggle = this.toggle.bind(this)
	this.state = {opacity: false}
	}

	toggle() {
	const tooltipNode = ReactDOM.findDOMNode(this)
	this.setState ({ 
	opacity: !this.state.opacity,
	top : tooltipNode.offsetTop,
	left: tooltipNode.offsetLeft
	})
	}
	
	render() {
	const style= {
	zIndex: (this.state.opacity) ? 1000 : -1000,
	opacity: +this.state.opacity,
	top: (this.state.top || 0) + 20,
	left: (this.state.left || 0) -30
	}

	return <div style ={{display: "inline"}}>
				<span style={{color:"blue"}}
				onMouseEnter = {this.toggle}
				onMouseOut = {this.toggle}
				> 
					{this.props.children}
				</span>
				<div className="tooltip bottom" style={style}> 
					<div className="tooltip-arrow"> </div>
					<div className="tooltip-inner">
						{this.props.text}
					</div> 
						
				</div>
				
			</div>
	}
}



ReactDOM.render (
	<div>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo, adipisci fugiat eveniet facilis. Impedit quos, minima expedita enim eos, repellat eaque recusandae laboriosam beatae sed velit consectetur consequatur libero!<Tooltip text='Message of tooltip'> Поле для текста, формируещого tooltip </Tooltip>
	</div>,
	document.getElementById('content')
);