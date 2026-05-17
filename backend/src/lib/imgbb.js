import axios from "axios";
import { config } from "dotenv";

config();

const IMGBB_API_KEY = process.env.IMGBB_API_KEY;
const IMGBB_API_URL = "https://api.imgbb.com/1/upload";

export const uploadToImgBB = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", IMGBB_API_KEY);

    const response = await axios.post(IMGBB_API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data.url;
  } catch (error) {
    console.log("Error uploading to ImgBB:", error.message);
    throw error;
  }
};
