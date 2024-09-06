import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full bg-background">
      <Navbar />
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
