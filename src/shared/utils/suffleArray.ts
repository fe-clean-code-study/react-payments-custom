const suffleArray = <T extends unknown[]>(arr: T) => {
  const suffledArray = [...arr];

  for (let i = suffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [suffledArray[i], suffledArray[j]] = [suffledArray[j], suffledArray[i]];
  }
  return suffledArray as T;
};

export default suffleArray;
