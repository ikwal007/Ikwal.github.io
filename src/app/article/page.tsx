import Articles from "@/components/views/articles/articles";
import { ArticleProvider } from "@/contexts/articleContext";
import GuestLayout from "@/layouts/guestLayout";

export default async function page() {
  return (
    <GuestLayout>
      <ArticleProvider>
        <Articles />
      </ArticleProvider>
    </GuestLayout>
  );
}
