"use client";
// components/UploadMp3Form.tsx
import React, { useRef } from "react";
import { useState } from "react";
import { uploadMp3File } from "@/lib/uploadFile";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addSubcollectionDocument } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";

const UploadMp3Form: React.FC<{ id: string }> = ({ id }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ISLoading, setISLoading] = useState<boolean>(false);
  const RefFileInput = useRef<HTMLInputElement>(null);
  const RefTileInput = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    if (RefFileInput.current) {
      RefFileInput.current.value = "";
    }
    if (RefTileInput.current) {
      RefTileInput.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        setISLoading(true);
        const up = await uploadMp3File(file, `uploads/${file.name}`);
        if (up.ref.fullPath) {
          // addSubcollectionDocument("")
          await addSubcollectionDocument("Sounds", id, "Sounds", {
            title: RefTileInput.current?.value,
            filePath: up.ref.fullPath,
          });
          clearInputs();
        }
        setError(null);
        toast({
          title: "File uploaded successfully",
        });
        setISLoading(false);
      } catch (err) {
        setISLoading(false);
        if (err instanceof Error) {
          toast({
            title: err.message,
          });
          setError(err.message);
        }
      }
    }
  };

  return (
    <div className="my-10 flex flex-col gap-5">
      <h2>Upload MP3 File</h2>
      <div className="flex justify-between  items-start  px-4 ">
        <div>
          <div>
            <Label>title of file</Label>
            <Input
              type="text"
              className="max-w-[300px] mt-5 "
              ref={RefTileInput}
            />
          </div>
        </div>
        <Input
          type="file"
          accept=".mp3"
          title=""
          onChange={handleFileChange}
          className="text-white  max-w-64 h-64"
          ref={RefFileInput}
        />
      </div>

      <Button
        onClick={handleUpload}
        disabled={!file || ISLoading}
        className="max-w-max"
      >
        {ISLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Upload
      </Button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default UploadMp3Form;
