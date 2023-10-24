const timeComparison = (submittedOn) => {
  const now = Date.now();
  return Math.floor((now - submittedOn) / 1000);
};

export default timeComparison;
