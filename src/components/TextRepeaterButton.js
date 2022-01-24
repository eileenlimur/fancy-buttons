import { useState } from 'react';

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  let i = 0;
  while (i < repetitions) {
    textArray.push(<span key={i}>I like this text</span>);
    i++;
  }

  const handleClick = () => setRepetitions(repetitions + 1);

  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      {textArray}
    </button>
  )
}

export default TextRepeaterButton;