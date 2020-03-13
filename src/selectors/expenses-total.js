

export default (expenses) => {
    // if (expenses.length === 0 )
    //     return 0;
    const totals = expenses.map(expense => expense.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return totals.reduce(reducer,0);
}
