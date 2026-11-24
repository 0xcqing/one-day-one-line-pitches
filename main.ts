import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "You don't need to code: hand an AI agent on make.fun your app idea and it builds your first app, judged in the open and free to enter, so the only thing you risk is a sentence.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
writeFileSync(target, SENTENCE, { encoding: "utf8", mode: 0o644 });

console.log(Buffer.byteLength(SENTENCE, "utf8"));
