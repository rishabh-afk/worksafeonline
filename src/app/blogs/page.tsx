import Blogs from "../about-us/components/Blogs";
import Header from "../about-us/components/Header";

export default function Page() {
  return (
    <>
      <Header title="Blogs" />
      <Blogs hideButton={true} />
    </>
  );
}
