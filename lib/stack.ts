/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import * as cdk from "aws-cdk-lib/core";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import type { Construct } from "constructs";

export class HappyHolidaysAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appBucket = new s3.Bucket(this, "HappyHolidaysAppBucket2", {
      bucketName: "happy-holidays-app2",
      websiteIndexDocument: "index.html",
      blockPublicAccess: new s3.BlockPublicAccess({
        restrictPublicBuckets: false,
      }),
    });
    appBucket.grantPublicAccess();

    const src = new s3Deploy.BucketDeployment(this, "DeployHappyHolidaysApp2", {
      sources: [s3Deploy.Source.asset(`${__dirname}/../build`)],
      destinationBucket: appBucket,
    });

    const cf = new cloudfront.CloudFrontWebDistribution(
      this,
      "HappyHolidaysAppStaticDistribution2",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: appBucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        defaultRootObject: "index.html",
      }
    );
  }
}
