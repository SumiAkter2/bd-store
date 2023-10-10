const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-200 text-base-content justify-center md:justify-between">
        <aside>
          <p className="text-2xl font-bold"># Bd Store</p>
        </aside>

        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="text-center font-bold bg-gray-200 pb-6">
        <p>Copy &copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
