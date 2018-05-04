function driversWithRevenueOver(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.revenue > query})
}
