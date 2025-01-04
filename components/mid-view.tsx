import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import { WEBSITE_NAME } from "../utils/constants";

export default function MidView() {
  return (
    <div className='mid-view'>
      <div className='page-size colors-bg-rain'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='colors-bg-layer'></div>

      <div className='page-size mid-inner'>
        <div className='mid-text'>
          <h1>Welcome to</h1>
          <h1 className='txt-cap color-sec'>{WEBSITE_NAME}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            perferendis quod eius possimus corporis? Explicabo nulla dolore
            pariatur aut rerum veniam nemo eveniet nobis deleniti?
          </p>
          <div className='mid-icons'>
            <a href='facebook.com' target={"_blank"}>
              <FaFacebook />
            </a>
            <a href='facebook.com' target={"_blank"}>
              <FaInstagram />
            </a>
            <a href='facebook.com' target={"_blank"}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className='page-size pos-rel'>
        <div className='mid-right'>
          <picture>
            <img className='image-a' src='/media/assets/home-bg.png' alt='' />
          </picture>
        </div>
      </div>
      <div className='page-size search-secition'>
        <div className='search-view df ac'>
          <input
            type='search'
            placeholder='Find faster then explore search your term and keywords here.'
          />
          <FaSearch />
        </div>
      </div>
    </div>
  );
}
