export default function LayoutCentered({ children }) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-32">{children}</div>
  );
}
