import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  file: File;
  type: string;
}

export default function ProfileImage({ file, type }: IProps) {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setFileUrl(objectUrl);

      // Cleanup the object URL when the component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  if (!fileUrl) {
    return <p>Loading...</p>;
  }

  return (
    <Image
      src={fileUrl}
      alt="profile-img"
      width={type === "receipt" ? 200 : 140}
      height={type === "receipt" ? 200 : 140}
    />
  );
}
