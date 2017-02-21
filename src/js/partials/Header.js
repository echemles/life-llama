import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    const links = [ 
        {path: '/', name: 'Home'},
        {path: '/default', name: 'Default'},
        {path: '/user/12345', name: 'User'}];

    return (
    	<div className='header'>
            <ul>
            {links.map((link, i)=>{
                return <li key={i}><Link to={link.path}>{link.name}</Link></li>;
            })}
            </ul>
    	</div>
    );
  }
}


