require("dotenv").config();

export const production = {
  AWS_ACCOUNT_NUMBER: process.env.AWS_ACCOUNT_NUMBER ?? "",
  AWS_REGION: process.env.AWS_REGION ?? "",
};
