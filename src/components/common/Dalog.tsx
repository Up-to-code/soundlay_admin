"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { addDocument } from "@/lib/firebase";
import { toast } from "../ui/use-toast";
import { uploadMp3File } from "@/lib/uploadFile";

function Dalog() {
  const [newItem, setNewItem] = useState<string>("");

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

  const handleSubmit = async () => {
    if (file) {
      try {
        setISLoading(true);
        const up = await uploadMp3File(file, `uploads/${file.name}`);
        if (up.ref.fullPath) {
          const res = await addDocument("Sounds", {
            name: newItem,
            filePath: up.ref.fullPath,
          });
          if (res) {
            // window.location.reload();
            toast({
              title: "sacssfull add" + ` ${newItem}`,
              description: "Friday, February " + Date(),
            });
          }
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

    setNewItem("");
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-primary py-2 font-bold text-lg  px-8 rounded-md">
        <PlusIcon size={30} />
      </DialogTrigger>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle className="text-white">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-white">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
            <Input
              type="file"
              accept=".mp3"
              title=""
              onChange={handleFileChange}
              className="text-white  max-w-64 h-64"
              ref={RefFileInput}
            />
            <Input
              className="my-5"
              onChange={(e) => setNewItem(e.target.value)}
            />
          </DialogDescription>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => handleSubmit()}
            disabled={!file || ISLoading}
          >
            <DialogTrigger>
         
              Submit
              {ISLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            </DialogTrigger>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Dalog;
