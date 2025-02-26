import Image from "next/image";
import { Post } from "@/utils/axios";
import React, { useState, useRef } from "react";
import { LuUser, LuCamera } from "react-icons/lu";

const ProfileUploader = ({ profilePath }: { profilePath?: string }) => {
  const [preview, setPreview] = useState(profilePath);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onUpload(file);
    }
  };

  const onUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response: any = await Post("api/SaveImage", formData);
      if (response && response[0] && response.length > 0)
        setPreview(response[0]);
    } catch (error) {
      console.log("Failed to set selected image: " + error);
    }
  };

  return (
    <div
      className="relative w-32 h-32 rounded-full bg-gray-200 text-white text-7xl flex justify-center items-center cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      {preview ? (
        <Image
          width={124}
          height={124}
          priority
          unoptimized
          src={preview}
          alt="Profile Image"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <LuUser className="text-gray-500 text-6xl" />
      )}
      <div className="absolute z-10 bottom-1 right-1 bg-primary p-2 rounded-full">
        <LuCamera title="Upload Profile Pic" className="text-white text-sm" />
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfileUploader;
