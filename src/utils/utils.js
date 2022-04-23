const startingLines = [
  "I consider myself as",
  "I think that I am",
  "People tell me that I am",
  "I like to think that I am",
  "I would describe myself as",
];

export const createNewBio = (traits) => {
  const lineIndex = Math.floor(Math.random() * startingLines.length);
  let newBio = `${startingLines[lineIndex]}`;

  traits.map((trait, index) => {
    if (index === 0) {
      newBio = `${newBio} ${trait.toLowerCase()}`;
    } else if (index === traits.length - 1) {
      newBio = `${newBio} and ${trait.toLowerCase()}.`;
    } else {
      newBio = `${newBio}, ${trait.toLowerCase()}`;
    }

    return newBio;
  });
  return newBio;
};
