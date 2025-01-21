"use client";
import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useToast } from "@/hooks/use-toast";
const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    // Authenticate our user
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}.`,
      );
    }
    const data = await response.json();
    const { token, expire, signature } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

type Props = {
  onFileChange: (filePath: string) => void;
};
const ImageUpload = ({ onFileChange }: Props) => {
  const { toast } = useToast();
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast({
      title: "Image uploaded successfully",
      description:`${res.filePath} uploaded successfully!`
    });
  };
  const onError = (error: any) => {
    toast({
      title: "Image upload failed",
      description:"Your image could not be uploaded. Please try again.",
      variant:"destructive",
    });
  };

  const imageSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (ikUploadRef.current) {
      // @ts-ignore
      ikUploadRef.current.click();
    }
  };
  return (
    <ImageKitProvider
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        className="hidden"
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <button className="upload-btn" onClick={imageSubmitHandler}>
        <Image
          src="icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename"> {file.filePath}</p>}
      </button>
      {file && (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            height={350}
            width={500}
          />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
