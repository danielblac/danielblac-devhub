// import axios from "axios";
// import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import FileDetails from "./FileDetails";
import { FileError } from "react-dropzone";
import axios from "axios";

interface SingleFileProps {
  file: File;
  error: boolean;
  errors: FileError[] | readonly FileError[] | null;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export default function SIngleFileWithProgress({
  file,
  error,
  errors,
  onDelete,
  onUpload,
}: SingleFileProps) {
  // DECLARATION
  // const { data: session } = useSession();

  // const presets = {
  //   publicId: session?.user?.data?.fullName! ||  "unknown",
  //   folder: `${session?.user?.data?.fullName! || "unknown"}-files`,
  //   folder: `${"unknown"}-files`,
  // };

  // STATES
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  // const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API as string;

  useEffect(() => {
    async function upload() {
      const formData = new FormData();
      formData.append("file", file);
      // formData.append("api_key", apiKey);
      // formData.append("folder", presets.folder);
      formData.append("upload_preset", "uy4br1wh");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/thrillers-travels/image/upload",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              if (!total) return;
              const percentCompleted = Math.round((loaded * 100) / total);
              setProgress(percentCompleted);
            },
          }
        );
        const url = response?.data.secure_url;
        onUpload(file, url);
        setImageUrl(url);
      } catch (err) {
        console.error(err);
      }
    }

    upload();
  }, []);

  return (
    <FileDetails
      file={file}
      progress={progress}
      image={imageUrl}
      onDelete={onDelete}
      error={error}
      errors={errors}
    />
  );
}
