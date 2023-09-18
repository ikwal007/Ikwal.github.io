import GuestLayout from "@/layouts/guestLayout";
import IndexView from "@/views/index/indexView";
import axios from "axios";

export async function getServerSideProps() {
  const domain  = process.env.NEXTDOMAIN;
  try {
    const res = await axios.get(
      `${domain}/api/artikel/get-all-artikel`
    );
    const data = res.data;
    return {
      props: {
        lastPost: data,
      },
    };
  } catch (error) {
    return{
      props: {
        lastPost: [],
      }
    }
  }
}

export default function Home({lastPost}) {
  console.log(lastPost);
  return (
    <GuestLayout>
      <IndexView lastPost={lastPost.data} />
    </GuestLayout>
  );
}
