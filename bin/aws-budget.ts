#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsBudgetStack } from '../lib/aws-budget-stack';

const app = new cdk.App();

new AwsBudgetStack (app, 'AwsBudgetStack', {
  DailyBudgetAmount: 0.01,
  emailaddress: 'your@email.com'
});