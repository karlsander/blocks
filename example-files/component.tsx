import React from "react";

interface HeyProps {
  /** The user's name */
  name: string;
}

export default function Hey({ name }: HeyProps) {
  return <div>Hey {name}</div>;
}
