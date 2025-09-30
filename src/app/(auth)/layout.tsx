export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex items-center justify-center bg-orange-50">
      {children}
    </main>
  );
}
