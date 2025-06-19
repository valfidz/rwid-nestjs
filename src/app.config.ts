import { Config } from "nest-zod-config";
import { z } from "zod";

const appConfigSchema = z.object({
    PORT: z.number(),
    TEXT: z.string(),
});

export class AppConfig extends Config(appConfigSchema) {}