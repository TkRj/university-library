import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "./config";

export const workflow = new WorkflowClient({
  token: config.env.upstash.qstash.token,
  baseUrl: config.env.upstash.qstash.databaseUrl,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstash.token,
});

type SendEmail = {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({ email, subject, message }: SendEmail) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resend.token }),
    },
    body: {
      from: "Tekraj <contact@tekrajgrg.site>",
      to: [email],
      subject,
      html: message,
    },
  });
};
