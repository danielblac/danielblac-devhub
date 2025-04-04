import { FileError } from "react-dropzone";
import FileDetails from "./FileDetails";

interface UploadErrorProp {
  file: File;
  error: boolean;
  errors: FileError[] | readonly FileError[] | null;
  onDelete: (file: File) => void;
}

export default function UploadError({
  file,
  onDelete,
  error,
  errors,
}: UploadErrorProp) {
  return (
    <FileDetails
      file={file}
      progress={null}
      image={null}
      onDelete={onDelete}
      error={error}
      errors={errors}
    />
  );
}
