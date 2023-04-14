#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsBudgetStack } from '../lib/aws-budgets-stack';

const app = new cdk.App();

new AwsBudgetStack (app, 'AWSBudgetStack', {
  DailyBudgetAmount: 0.01,
  NatBudgetAmount: 0.5,
  emailaddress: 'ylkael@hotmail.com'
});