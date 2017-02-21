export default class Default extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
  	const userID = this.props.params.userID,
  		className = this.props.className;

    return (
    	<div className='page user'>
    		<h1>User {userID}</h1>
    	</div>
    );
  }
}


