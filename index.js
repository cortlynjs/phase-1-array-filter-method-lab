const drivers = [
    { name: 'Pat', hometown: 'Atlanta' },
    { name: 'CJ', hometown: 'Los Angeles' },
    { name: 'Tammy', hometown: 'Houston' },
    { name: 'Ray', hometown: 'New York' }
  ];
  
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  