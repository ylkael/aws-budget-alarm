import * as budgets from 'aws-cdk-lib/aws-budgets';
import { Construct } from 'constructs';
interface BudgetProps {
    DailyBudgetAmount: number,
    emailaddress: string,
}
export class DailyBudget extends Construct {
  constructor(scope: Construct, id: string, props: BudgetProps) {
    super(scope, id);

    new budgets.CfnBudget(this, 'DailyBudget', {
        budget: {
            budgetLimit: {
                // The amount is set in the bin\aws-budget.ts file
                amount: props.DailyBudgetAmount,
                unit: 'USD'
            },
            budgetName: 'DailyBudget',
            budgetType: 'COST',
            timeUnit: 'DAILY'            
        },
        notificationsWithSubscribers: [
            {
                notification: {
                    comparisonOperator: 'GREATER_THAN',
                    notificationType: 'ACTUAL',
                    threshold: 100,
                    thresholdType: 'PERCENTAGE',
                },
                subscribers: [
                    {
                        // The email is set in the bin\aws-budget.ts file
                        address: props.emailaddress,
                        subscriptionType: 'EMAIL',
                    }, 
                ],
            },
        ],
    });
  }
}