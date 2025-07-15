import Header from "@/components/Header";
import { Metadata } from "next";
import DashboardUi from "@/components/resource-detail/dashboard-ui";

export const metadata: Metadata = {
  title: "Dashboard UI Kit - FreebiesKit",
  // ... tambahkan metadata lain jika perlu
};

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <DashboardUi id={id} />
    </>
  );
} 