import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['<Full stack developer/>', '<Android developer/>', '<Reader/>', '<Geopolitical Enthusiast/>', '<Programmer/>', '<UI/UX Designer/>'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="inline-flex items-center">
      <span className="text-2xl sm:text-3xl font-bold">{text}</span>
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default TypingEffect;
