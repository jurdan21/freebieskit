import Header from "@/components/Header";
import DetailWebDesignInspiration from "@/components/resource-detail/web-design-inspiration";

export default function Page({ params }: { params: { idSlug: string } }) {
  // idSlug format: "1-minimalist-portfolio-website"
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <DetailWebDesignInspiration id={id} />
    </>
  );
} 