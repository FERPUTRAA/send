import { env } from "@/env";

export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getSpotifyToken = async (): Promise<SpotifyToken> => {
  const clientId = env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  const req = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  })
    .then((res) => res.json())
    .then((data) => data);

  return req;
};
