function findMatching(source, drivers) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === drivers.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, drivers) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(drivers.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }
