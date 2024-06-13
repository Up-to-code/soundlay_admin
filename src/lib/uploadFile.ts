// utils/uploadFile.ts
import { UploadResult, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/db/DB";

const MAX_SIZE_MB = 10;
const MAX_DURATION_S = 30;

const validateFile = (file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      reject(new Error("File size exceeds the 2MB limit."));
      return;
    }

    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      if (audio.duration > MAX_DURATION_S) {
        reject(new Error("Audio duration exceeds the 10 seconds limit."));
      } else {
        resolve();
      }
    };
    audio.onerror = () => {
      reject(new Error("Invalid audio file."));
    };
  });
};

export const uploadMp3File = async (
  file: File,
  filePath: string,

): Promise<UploadResult> => {
  await validateFile(file);
  const storageRef = ref(storage, filePath);
  const up = await uploadBytes(storageRef, file);
  return up;
};
