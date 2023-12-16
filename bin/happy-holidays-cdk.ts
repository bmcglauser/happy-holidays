#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { HappyHolidaysAppStack } from "../lib/stack";
import { production } from "../lib/environments";

const app = new cdk.App();
new HappyHolidaysAppStack(app, "HappyHolidaysAppStack2", {
  env: {
    account: production.AWS_ACCOUNT_NUMBER,
    region: production.AWS_REGION,
  },
});
