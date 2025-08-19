// src/lib/client.js
import { createClient } from "@sanity/client";

export default createClient({
  projectId: "s47peg38",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});
