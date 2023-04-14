import * as budgets from 'aws-cdk-lib/aws-budgets';
import { Construct } from 'constructs';

interface NatHourBudgetProps {
    NatBudgetAmount: number,
    emailaddress: string,
}

export class NatHourBudgets extends Construct {
  constructor(scope: Construct, id: string, props: NatHourBudgetProps) {
    super(scope, id);

    new budgets.CfnBudget(this, 'NatHourBudget', {
        budget: {
            budgetLimit: {
                amount: props.NatBudgetAmount,
                unit: 'HOURS'
            },
            budgetName: 'NatHourBudget',
            budgetType: 'USAGE',
            timeUnit: 'DAILY'            
        },
        notificationsWithSubscribers: [
            {
                notification: {
                    comparisonOperator: 'GREATER_THAN',
                    notificationType: 'ACTUAL',
                    threshold: 50,
                    thresholdType: 'PERCENTAGE',
                },
                subscribers: [
                    {
                        address: props.emailaddress,
                        subscriptionType: 'EMAIL',
                    }, 
                ],
            },
        ],
    });
  }
}