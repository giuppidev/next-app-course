export default function LayoutEsempio({ children }) {
  return (
    <div>
      <div className="bg-red-200 w-full flex justify-between p-4">
        <span>Logo</span>
        <span>login</span>
      </div>
      {children}
    </div>
  );
}
