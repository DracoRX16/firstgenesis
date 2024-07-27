import Link from 'next/link';

const FooterNav = () => (
  <nav className="fixed bottom-0 w-full bg-blue-500 text-white flex justify-around p-2">
    <Link href="/financial-planning" className="hover:underline">Financial Planning</Link>
    <Link href="/career-opportunities" className="hover:underline">Career Opportunities</Link>
    <Link href="/find-scholarships" className="hover:underline">Find Scholarships</Link>
  </nav>
);

export default FooterNav;
