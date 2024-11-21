import axios from "axios";
import { SingleTrack } from "@/types/SingleTrack";
import { getSpotifyToken } from "./spotifyToken";

export const getSingleTrack = async (song_id: string): Promise<SingleTrack> => {
  const token = await getSpotifyToken();
  const res = await axios.get(`https://api.spotify.com/v1/tracks/${song_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};
