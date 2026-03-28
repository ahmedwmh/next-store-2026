import SkeletonCard from "@/components/card/SkeletonCard";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

type Props = {
  search?: string;
  category?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Props>;
}) {
  const params = await searchParams;
  return (
    <section>
      <CategoriesList category={params?.category} search={params?.search} />
      <Suspense fallback={<SkeletonCard />} >
         <PropertiesContainer category={params?.category} search={params?.search} />
      </Suspense>
    </section>
  );
}
