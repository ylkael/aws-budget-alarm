import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DailyBudget } from './constructs/daily-budget';
import { NatHourBudget } from './constructs/nat-hour-budget';
interface BudgetStackProps extends cdk.StackProps{
    DailyBudgetAmount: number,
    NatBudgetAmount: number,
    emailaddress: string
}
export class AwsBudgetStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BudgetStackProps) {
    super(scope, id, props);

    new DailyBudget(this, 'DailyBudget', {
        DailyBudgetAmount: props.DailyBudgetAmount,
        emailaddress: props.emailaddress
        }); 
    
    new NatHourBudget(this, 'NatHourBudget', {
        NatBudgetAmount: props.NatBudgetAmount,
        emailaddress: props.emailaddress
        });
  }
}