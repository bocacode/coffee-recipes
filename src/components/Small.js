import React, { useState } from 'react';

export default function Small() {
  const [plop, setPlop] = useState('fizz');
  return <p>JSX {plop}</p>
}
