import { z } from "zod";

const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  duration: z.number(),
  price: z.number(),
});
