export default function Home({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="h-full w-full bg-[#272727] text-[#cacaca]">
        {children}
      </main>
    );
  }
  