import { z } from "zod";

const movieSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullable().default(null),
  duration: z.number().int().positive(),
  price: z.number().int(),
});

const movieSchemaReq = movieSchema.omit({ id: true });

const moviesSchema = z.array(movieSchema);

const movieSchemaPart = movieSchemaReq.partial();

export { movieSchema, movieSchemaReq, moviesSchema, movieSchemaPart };
