import React from 'react';

const EllipsisText = ({ text, maxCharacters }: {text: string, maxCharacters: number}) => {
  const suffix = '...';

  if (text.length > maxCharacters) {
    const trimmedText = text.substr(0, maxCharacters);
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');
    const newText = trimmedText.substr(0, lastSpaceIndex) + suffix;
    return <p>{newText}</p>;
  }

  return <p>{text}</p>;
};

export default EllipsisText;
