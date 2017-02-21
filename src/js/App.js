import Header from './partials/Header.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		//prevents flash of unstyled content by revealing site only when app loads
		let appContainer = document.getElementById("root");
		appContainer.style.opacity = 1;
	}

	static defaultProps = {
    loadingDuration: 2500,
    transition: {
      className: 'content-area',
      component: 'div',
      transitionName: 'page-transition',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }
  }

  render() {
  	const transition = this.props.transition,
  		children = this.props.children;

    return (
    	<div className='app'>
    		<Header />
    		<ReactCSSTransitionGroup {...transition}>
		      { React.cloneElement (children, {
		      	className: 'page',
		      	key: (Math.round(Math.random() * 999))
		      })}
    		</ReactCSSTransitionGroup>

    	</div>
    );
  }
}


