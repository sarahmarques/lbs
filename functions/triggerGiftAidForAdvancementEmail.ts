import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  let requestBody;
  try {
    requestBody = JSON.parse(event.body) as {
      ukTaxPayer: string;
      emailAddress: string;
      title: string;
      firstName: string;
      lastName: string;
      fullHomeAddress: string;
      postCode: string;
      date: Date;
      signature: string;
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify("Invalid JSON in request body"),
    };
  }

  const emailReceivers =
    process.env.NETLIFY_EMAILS_GIFT_AID_ADMINISTRATOR_LIST || "";

  await fetch(
    `${process.env.URL}/.netlify/functions/emails/giftAidForAdvancement`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET || "",
      },
      method: "POST",
      body: JSON.stringify({
        from: process.env.NETLIFY_EMAILS_SENDER_EMAIL_ADDRESS,
        to: [requestBody.emailAddress, ...emailReceivers.split("|")],
        subject: "Gift Aid confirmation",
        parameters: {
          ukTaxPayer: requestBody.ukTaxPayer,
          emailAddress: requestBody.emailAddress,
          title: requestBody.title,
          firstName: requestBody.firstName,
          lastName: requestBody.lastName,
          fullHomeAddress: requestBody.fullHomeAddress,
          postCode: requestBody.postCode,
          date: requestBody.date,
          signature: requestBody.signature,
        },
      }),
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify("Email sent!"),
  };
};

export { handler };
