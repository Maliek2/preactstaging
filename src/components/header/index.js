import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Maliek App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Profile</Link>
			<Link activeClassName={style.active} href="/profile/john">Privacy</Link>
		</nav>
	</header>
);

export default Header;
