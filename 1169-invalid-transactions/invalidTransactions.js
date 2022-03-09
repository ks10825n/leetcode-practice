/**
 * @param {string[]} transactions
 * @return {string[]}
 *
 * Return an array of transactions that are possibly invalid. The criteria is:
 * - If the amount exceeds $1000
 * - If it occurs within and including 60 mins of another transaction with the
 * same name in a different city
 */
const invalidTransactions = (transactions) => {
  const n = transactions.length;
    const added = new Array(n).fill(false);
    const res = [];

    for (let i = 0; i < n; i++) {
        const [name1, time1, amount1, city1] = transactions[i].split(",");

        if (amount1 > 1000 && !added[i]) {
            res.push(transactions[i]);
            added[i] = true;
        }

        for (let j = i + 1; j < n; j++) {
            const [name2, time2, amount2, city2] = transactions[j].split(",");

            if (name1 === name2 && Math.abs(time1 - time2) <= 60 && city1 != city2) {
                if (!added[j]) {
                  res.push(transactions[j]);
                  added[j] = true;
                }

                if (!added[i]) {
                  res.push(transactions[i]);
                  added[i] = true;
                }
            }
        }

    }

    return res;
};