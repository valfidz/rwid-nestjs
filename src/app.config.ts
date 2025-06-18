import { Config } from "nest-zod-config";
import { z } from "zod";

const appConfigSchema = z.object({
    port: z.number(),
    text: z.string(),
});

export class AppConfig extends Config(appConfigSchema) {}