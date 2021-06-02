import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Logo />
			</nav>
		</div>
	);
};

export default Header;
