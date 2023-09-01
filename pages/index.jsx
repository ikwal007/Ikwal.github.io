import GuestLayout from "@/layouts/guestLayout";
import IndexView from "@/views/index/indexView";

export default function Home() {
  return <GuestLayout children={<IndexView />} />;
}
