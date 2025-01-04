import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { WEBSITE_NAME } from "../utils/constants";

function Header() {
  return (
    <header>
      <nav className='page-size df ac jc-b'>
        <ul>
          <li>
            <Link href='/'>
              <h4 className='fz-14 txt-up'>{WEBSITE_NAME}</h4>
            </Link>
          </li>
        </ul>
        <ul className='df ac header-link'>
          <li className='active'>
            <Link href='/home'>
              <FaHome />
            </Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
