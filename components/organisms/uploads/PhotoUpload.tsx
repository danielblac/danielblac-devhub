import { useCallback, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import SIngleFileWithProgress from "./SIngleFileWithProgress";
import UploadError from "./UploadError";
import ProfileImage from "@/components/atoms/ProfileImage";
import { CgProfile } from "react-icons/cg";
import { PiInvoice } from "react-icons/pi";

interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

interface IProps {
  getImageUrl: (url: string) => void;
  type: string;
}

export default function PhotoUpload({ getImageUrl, type }: IProps) {
  // STATES
  const [files, setFiles] = useState<UploadableFile[]>([]);

  // FUNCTION
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const mappedAccepted: UploadableFile[] = acceptedFiles.map((file) => ({
        file,
        errors: [],
      }));
      const mappedRejected: UploadableFile[] = rejectedFiles.map(
        (rejection) => ({
          file: rejection.file,
          errors: [...rejection.errors], // Convert to mutable array
        })
      );
      setFiles((current) => [...current, ...mappedAccepted, ...mappedRejected]);
    },
    []
  );

  console.log(files);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxSize: 2000 * 1024,
    maxFiles: 1,
  });

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  function onUpload(file: File, url: string) {
    setFiles((current) =>
      current.map((fw) => (fw.file === file ? { ...fw, url } : fw))
    );
    getImageUrl(url);
  }

  return (
    <>
      <div className="staff-profile-photo">
        {files.length ? (
          <ProfileImage file={files[0].file} type={type} />
        ) : (
          <div className={type === "receipt" ? "no-img-receipt" : "no-img"}>
            {type === "receipt" ? (
              <PiInvoice size={70} />
            ) : (
              <CgProfile size={70} />
            )}
          </div>
        )}

        {!files.length && (
          <div className="staff-photo" {...getRootProps()}>
            <input {...getInputProps()} />
            <button>Upload Image</button>
          </div>
        )}
      </div>
      {files.map((fileWrapper, index) => (
        <div key={index}>
          {fileWrapper.errors.length ? (
            <UploadError
              file={fileWrapper.file}
              onDelete={onDelete}
              error={true}
              errors={fileWrapper.errors}
            />
          ) : (
            <SIngleFileWithProgress
              file={fileWrapper.file}
              onDelete={onDelete}
              onUpload={onUpload}
              error={false}
              errors={[]}
            />
          )}
        </div>
      ))}
    </>
  );
}
