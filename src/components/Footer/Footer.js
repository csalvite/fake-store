import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-logo-container'>
        <img src='/resources/images/logoNikeNegro.png' alt='logo' />
      </div>
      <div className='footer-about'>
        <h2>About</h2>
        <ul>
          <li>About us</li>
          <li>Features</li>
          <li>News & Blog</li>
        </ul>
      </div>
      <div className='footer-connect'>
        <h2>Connect</h2>
        <ul>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className='footer-support'>
        <h2>Support</h2>
        <ul>
          <li>FAQs</li>
          <li>Support Center</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};
