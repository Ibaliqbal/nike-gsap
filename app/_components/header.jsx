import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav wrapper-logo">
          <Image src={"/logo.png"} alt="Logo Nike" className="logo" width={60} height={60} />
          <h1>NIKE</h1>
        </div>
        <ul>
          <li className="nav">
            <Link href={"#"} className="link">
              HOME
            </Link>
          </li>
          <li className="nav">
            <Link href={"#about"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="nav">
            <Link href={"#products"} className="link">
              PRODUCTS
            </Link>
          </li>
          <li className="nav">
            <Link href={"#athlets"} className="link">
              ATHLETS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
