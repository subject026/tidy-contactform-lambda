import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import { FormDTO } from "./src/types";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const formData = FormDTO.parse(JSON.parse(event.body || ""));
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "message sent",
        formData,
      }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 418,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: err }),
    };
  }
};
