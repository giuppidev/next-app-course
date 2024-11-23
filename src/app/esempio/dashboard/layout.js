import Link from "next/link";

export default function LayoutEsempio({ children }) {
  return (
    <div className="flex h-screen">
      <div className="h-full bg-green-300">
        <ul>
          <li>
            <Link href="/esempio/dashboard/pippo">Pippo</Link>
          </li>
          <li>
            <Link href="/esempio/dashboard/pluto">Pluto</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
