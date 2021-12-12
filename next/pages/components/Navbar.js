import Link from "next/link";

const NavBar = () => {
    return (   <div>
        <ul>
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>contact</li></Link>
            <Link href="/posts"><li>posts</li></Link>

        </ul>
        </div> );
}
 
export default NavBar;
