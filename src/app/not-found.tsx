export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FCFBFA] text-center px-4">
      <h1 className="font-[family-name:var(--font-serif)] text-[2.5rem] font-semibold text-[#1E1E1E] mb-4">
        Page Not Found
      </h1>
      <p className="font-sans text-[12px] text-[#8A7F86] uppercase tracking-[0.28em]">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
