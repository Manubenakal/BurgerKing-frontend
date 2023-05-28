import React from 'react';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BurgerKing</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @BurgerKing</strong>
      </div>
      <aside>
        <h4>Follow us</h4>
        <a href='https://www.youtube.com/channel/UC23ZqC2LTzl7dfOi6EmwJhg'>
          <AiFillYoutube />
        </a>
        <a href='https://www.instagram.com/burgerkingindia/'>
          <AiFillInstagram />
        </a>
        <a href='https://twitter.com/burgerkingindia'>
          <AiFillTwitterCircle />
        </a>
        <a href='https://www.facebook.com/burgerkingindia/'>
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
