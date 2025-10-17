type Investment = {
    initialAmount: number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContributions: number,
    totalInterestEarned: number
}

type CalculationResult = InvestmentResult [] | string;

function calculateInvestment(data: Investment): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;
    if (initialAmount < 0) {
        return "Initial amount cannot be negative";
    }
    if (duration <= 0) {
        return "Duration cannot be zero or negative";
    }
    if (expectedReturn <= 0) {
        return 'Expected return cannot be negative';
    }

    let totalAmount = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        totalAmount = totalAmount * (1 + expectedReturn / 100);
        totalInterestEarned = totalAmount - totalContributions - initialAmount;
        totalContributions += annualContribution;
        totalAmount += annualContribution;
        annualResults.push({
            year: `Year: ${i + 1}`,
            totalAmount,
            totalContributions,
            totalInterestEarned
        });
    }

    return annualResults;
}


function printInvestment(results: CalculationResult): void {
    if (typeof results === "string") {
        console.log(results);
    }
    if (Array.isArray(results)) {
        for(const result of results) {
            console.log(`Year: ${result.year}`);
            console.log(`Total Amount: ${result.totalAmount.toFixed(2)}`);
            console.log(`Total Contributions: ${result.totalContributions.toFixed(2)}`);
            console.log(`Total Interest Earned: ${result.totalInterestEarned.toFixed(2)}`);
            console.log("----------------------------");
            console.log();
        }
    }
}

const myInitialInvestment: Investment = {
    initialAmount: 1000,
    annualContribution: 5,
    expectedReturn: 10,
    duration: 10
}
const results = calculateInvestment(myInitialInvestment);

printInvestment(results);