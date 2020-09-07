import { log, on } from "@nore/cms";
import "./webapp.js";
import "./notion.js";

on("ready", async () => {
	log.info("Server ready!");
});
