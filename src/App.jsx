function Hero(props) {
	return (
		<div className="container">
			<img src={props.imageUrl} />
			<h1> {props.title} </h1>
			<p> {props.subtitle} </p>
		</div>	
	);
}

ReactDOM.render(
	<div>
		<Hero title="React"
			  subtitle="Библиотека для создания порно"
			  imageUrl="https://facebook.github.io/react/img/logo.svg" />
		<Hero title="Angular"
			  subtitle="framework"
			  imageUrl="http://angular.io/resources/images/logos/angular2/angular.svg" />
	</div>,
document.getElementById('root'));		  	  

