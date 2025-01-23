import { Client as WorkflowClient } from "@upstash/workflow";
import config from "./config";

export const workflow = new WorkflowClient({
  token: config.env.upstash.qstash.token,
  baseUrl: config.env.upstash.qstash.databaseUrl,
});
