import { Buffer } from "buffer";
// @ts-ignore
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = import.meta.env.VITE_PUBLIC_IPFS_PROJECT_ID;
const projectSecret = import.meta.env.VITE_PUBLIC_API_KEY_SECRET;

const projectIdAndSecret = `${projectId}:${projectSecret}`;
const auth = `Basic ${Buffer.from(projectIdAndSecret).toString("base64")}`;
export const subdomain = "https://oxdoor-vn.infura-ipfs.io";
export const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
