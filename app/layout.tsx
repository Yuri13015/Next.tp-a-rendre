import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-teal-500 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">
              <a className="hover:bg-teal-700 p-2 rounded">Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/analytics">
              <a className="hover:bg-teal-700 p-2 rounded">Analytics</a>
            </Link>
          </li>
          <li>
            <Link href="/extensions">
              <a className="hover:bg-teal-700 p-2 rounded">Extensions</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
