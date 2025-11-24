import MainHeader from "../components/MainHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <main className="h-(--main-content-height)">{children}</main>
    </>
  );
}
