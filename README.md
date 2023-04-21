# Create a zero spend Budget Alarm

### This budget notifies you once your spending exceeds 0.01 USD, which is above the AWS Free Tier limits.  

Content:
* `lib/constructs/daily-budget.ts`   
Defines the specs to use with Budget  

* `lib/aws-budget-stack.ts`   
Defines the Budget Stack  

* `bin/aws-budget.ts`    
Defines the values for Budget to use   

&nbsp;

```
Note:  
The Budget Alarm checks the budget daily, so the notification will not be in real time when the alert threshold is exceeded. 
 
Therefore the bill might be more than 0.01 USD when receiving the notification.
```