import CardCol from "@/components/common/CardCol";
import Dalog from "@/components/common/Dalog";

function page() {
  return (
    <div className="min-h-screen my-10  justify-between">
      <div className=" flex justify-end">
        <Dalog />
      </div>
      <CardCol />
    </div>
  );
}

export default page;
