import Link from "next/link";
import Image from "next/image";
import styles from "./../../styles/navbar.module.css"
const NavBar = () => {
    return (   
    <div className="module.nav">
        <ul>
            <Link href="/"><li><Image src="/logo.png" width={200} height={50} /></li></Link>
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>contact</li></Link>
            <Link href="/posts"><li>posts</li></Link>

        </ul>
        </div>
         );
}
 
export default NavBar;
