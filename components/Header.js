import Link from "next/link";

const Header = () => {
    return (
       <nav>
        <ul style={{display:'flex', justifyContent:'space-around'}}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/projets'>Projets</Link></li>
            <li><Link href='/user-list'>Users</Link></li>
        </ul>
       </nav>
    );
}

export default Header;