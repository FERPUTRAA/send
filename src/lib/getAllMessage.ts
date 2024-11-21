import axios from "axios";
import { env } from "@/env";

interface Main {
  message: string;
  data: Props[];
}

interface Props {
  post_id: string;
  recipient: string;
  message: string;
  song_id: string;
  createdAt: Date;
}

export const getAllMessage = async (): Promise<Main> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${env.NEXT_PUBLIC_API_PORT}/post`);
  return response.data;
};
