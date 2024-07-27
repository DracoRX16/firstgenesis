import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to FirstGenesis</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/financial-planning" className="btn">Financial Planning</Link>
        <Link href="/career-opportunities" className="btn">Career Opportunities</Link>
      </div>
      <div className="mt-4">
        <Link href="/find-scholarships" className="btn">Find Scholarships</Link>
      </div>
    </Layout>
  );
}
