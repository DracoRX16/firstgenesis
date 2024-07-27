import Header from './Header';
import FooterNav from './FooterNav';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow p-4">{children}</main>
    <FooterNav />
  </div>
);

export default Layout;
