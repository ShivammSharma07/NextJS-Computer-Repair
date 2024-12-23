// Step 3 of drizzle and neon setup

import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./db/migrations" });
    console.log("Migration complete");
  } catch (error) {
    console.error("error during migration", error);
    process.exit(1);
  }
};

main();
