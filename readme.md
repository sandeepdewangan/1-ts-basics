# Typescript

- Superset of Javascript.
- Adds strict and static types.

Installing and Running
`npm install -g typescript`
`tsc main.ts`

### Initializing TypeScript Project

`tsc --init`

`tsconfig.json` file generated.

Compile Code
`tsc`

Watch Mode
`tsc --watch` // re trigger compilation

Installing Packages
`npm init -y`

`package.json`
Just change `"type": "module"`, so that we can use modern import instead of require import.

## Investment Calculator Project

```ts
type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturnRate: number;
    durationInYear: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {

    if (data.initialAmount <= 0) {
        return "Initial amount cannot be less than or equal to 0";
    }
    if (data.durationInYear <= 0) {
        return "Provide valid year";
    }
    if (data.expectedReturnRate <= 0) {
        return "Provide valid expected return rate";
    }

    const annualResults: InvestmentResult[] = [];

    let total = data.initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    // calculate return
    for (let i = 0; i < data.durationInYear; i++) {
        total = total * (1 + data.expectedReturnRate);
        totalInterestEarned = total - totalContribution - data.initialAmount;
        totalContribution = totalContribution + data.annualContribution;
        total = total + data.annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContribution,
            totalInterestEarned,
        });
    }

    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log("-----------------------------");
    }
}
const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 1000,
    expectedReturnRate: 0.12,
    durationInYear: 10
};

const results = calculateInvestment(investmentData);
printResults(results);
```
