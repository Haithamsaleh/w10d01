import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
    return (   
    <div>
        <ul>
            <Link href="/"><li><Image src="/logo.png" width={100} height={100} /></li></Link>
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>contact</li></Link>
            <Link href="/posts"><li>posts</li></Link>

        </ul>
        </div> );
}
 
export default NavBar;
