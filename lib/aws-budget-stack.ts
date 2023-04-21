import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DailyBudget } from './constructs/daily-budget';

interface BudgetStackProps extends cdk.StackProps{
    DailyBudgetAmount: number,
    emailaddress: string
}
export class AwsBudgetStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BudgetStackProps) {
    super(scope, id, props);

    new DailyBudget(this, 'DailyBudget', {
        DailyBudgetAmount: props.DailyBudgetAmount,
        emailaddress: props.emailaddress
        }); 

  }
}