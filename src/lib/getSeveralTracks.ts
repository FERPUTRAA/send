import axios from "axios";
import { Main } from "@/types/apiResponse";

export async function getSeveralTracks(
  token: string,
  search: string,
): Promise<Main> {
  const bearerToken = `Bearer ${token}`;

  const req = await axios.get(
    `https://api.spotify.com/v1/search?q=${search}&type=track&limit=5&offset=0`,
    {
      method: "GET",
      headers: {
        Authorization: bearerToken,
      },
    },
  );
  return req.data;
}
