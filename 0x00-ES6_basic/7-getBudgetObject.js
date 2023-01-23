export default function getBudgetObject(income, gdp, capita) {
  // Method 1
  // const budget = {income, gdp, capita}

  // Method 2
  const budget = {
    [income]: income,
    [gdp]: gdp,
    [capita]: capita,
  };

  return budget;
}
