#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineEbDemoStack } from '../lib/cdk-pipeline-eb-demo-stack';

const app = new cdk.App();
new CdkPipelineEbDemoStack(app, 'CdkPipelineEbDemoStack', {
   env: { account: '353051341806', region: 'us-east-2' },

});

app.synth();
