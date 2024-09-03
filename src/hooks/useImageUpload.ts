import { useState } from "react";

type UseImageUploadReturn = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useImageUpload = (initialValue: string): UseImageUploadReturn => {
  const [thumbnail, setThumbnail] = useState(initialValue);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 복사해서 주소창에 붙여넣으면 이미지 보임. Base64
        // console.log(reader.result as string);
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return [thumbnail, handleImageUpload];
};

export default useImageUpload;
