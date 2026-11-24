import {
  Handler,
  HandlerEvent,
  HandlerContext,
  schedule,
} from "@netlify/functions";

import readFromQueue from "../services/events/readFromQueue";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const subscriptionName = process.env.SB_SUBSCRIPTION_PUBLICATIONS || "";

const publicationDetailsImportScheduledFunction: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // Read from queue for Publication subscription
  await readFromQueue(subscriptionName);

  return {
    statusCode: 200,
  };
};

const handler = schedule(
  "*/5 * * * *",
  publicationDetailsImportScheduledFunction
);

export { handler };
