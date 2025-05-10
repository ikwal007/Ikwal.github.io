import Categorys from "@/components/views/categorys/categorys";
import { PostProvider } from "@/contexts/postContext";
import GuestLayout from "@/layouts/guestLayout";

export default async function page({ params }: { params: Promise<any> }) {
  const { slug } = await params;
  console.log(slug);

  return (
    <GuestLayout>
      <PostProvider>
        <Categorys />
      </PostProvider>
    </GuestLayout>
  );
}
