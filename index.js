function driversWithRevenueOver(drivers, query) {
  return drivers.filter(function(driver) {
    return driver.revenue > query})
}

function driverNamesWithRevenueOver(drivers, query) {
  driverNames = drivers.filter(function(driver) {return driver.revenue > query})
  return driverNames.map(function(driver) {return driver.name})
}