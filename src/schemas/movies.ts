import { z } from "zod";

const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().default(null),
  duration: z.number(),
  price: z.number(),
});

const movieSchemaReq = movieSchema.omit({ id: true });

const moviesSchema = z.array(movieSchema);

export { movieSchema, movieSchemaReq, moviesSchema };
