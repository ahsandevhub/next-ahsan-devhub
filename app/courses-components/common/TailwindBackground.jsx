export function TailwindBackground() {
  return (
    <div className="relative size-full bg-slate-900">
      {/* Backdrop blur 1 */}
      <div className="absolute inset-0 left-[50%] top-[50%] h-[50%] w-[50%] rounded-full bg-sky-500 opacity-30 blur-[250px]" />
      {/* Backdrop blur 2 */}
      <div className="absolute inset-0 bottom-[30%] right-[15%] h-[30%] w-[30%] rounded-full bg-blue-500 opacity-50 blur-[200px]" />
      {/* Grids */}
      <div className="absolute inset-0 size-full bg-transparent bg-[linear-gradient(to_right,#cbd5e110_2px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_2px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-30" />
    </div>
  );
}
