import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { FileError } from "react-dropzone";
import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface FileDetailsProps {
  file: File;
  progress: number | null;
  image: string | null;
  error: boolean;
  errors: FileError[] | readonly FileError[] | null;
  onDelete: (file: File) => void;
}

export default function FileDetails({
  file,
  progress,
  error,
  errors,
  onDelete,
}: FileDetailsProps) {
  return (
    <div className="uploaded-photo">
      <div className="upload-details">
        <div className="upload-error">
          {error ? <p>Upload failed, please try again</p> : <p>{file.name}</p>}
          <div className="upload-error-content">
            {!error && progress !== null && progress === 100 ? (
              <FaCheckCircle size={20} color="#05BF0D" />
            ) : (
              <CircularProgress color="secondary" size={15} thickness={3} />
            )}
            <RiDeleteBinLine size={20} onClick={() => onDelete(file)} />
          </div>
        </div>
        {error &&
          errors?.map((err, index) => (
            <p key={index} className="error-txt">
              {err.message}
            </p>
          ))}
        {!error && (
          <p className="img-size">{Math.round(file.size / 1024)} KB</p>
        )}
        {progress !== null && !error && (
          <Box sx={{ width: "100%", marginTop: "0.5em" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        )}
      </div>
    </div>
  );
}
