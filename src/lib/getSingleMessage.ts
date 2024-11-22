import axios from "axios";
import { env } from "@/env";

interface Main {
  message: string;
  data: Data;
}

interface Data {
  post_id: string;
  recipient: string;
  message: string;
  song_id: string;
  createdAt: Date;
}

export const getSingleMessage = async (post_id: string): Promise<Main> => {
  const response = await axios.get(
    `${env.NEXT_PUBLIC_API_PORT}/post/${post_id}`,
  );
  return response.data;
};
