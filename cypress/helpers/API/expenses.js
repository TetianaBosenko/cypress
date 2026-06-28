export function createExpense(carId) {
  return cy.request({
    method: "POST",
    url: "/api/expenses",
    body: {
      carId: carId,
      reportedAt: new Date().toISOString().split("T")[0],
      mileage: 111,
      liters: 11,
      totalCost: 15,
    },
  });
}
