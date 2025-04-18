import Articles from "@/components/views/articles/articles";
import { PostProvider } from "@/contexts/postContext";
import GuestLayout from "@/layouts/guestLayout";

export default async function page() {
  return (
    <GuestLayout>
      <PostProvider>
        <Articles />
      </PostProvider>
    </GuestLayout>
  );
}
