"use client";
import UploadMp3Form from "@/components/admin/Uploadfile";
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "next/navigation";

function page() {
  const params = useParams();
  const { id } = params;

  return (
    <div className="min-h-screen">
      {typeof id === "string" && <UploadMp3Form id={id} />}
   
    </div>
  );
}

export default page;
