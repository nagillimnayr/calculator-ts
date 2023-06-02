import React, { useRef, useState } from 'react';
import 'mathjax.config.js';
export function Math({
  tex,
  display = false,
}: {
  tex: string;
  display: boolean;
}) {
  const rootElementRef = useRef(null);

  return <p></p>;
}
