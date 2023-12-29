import * as React from "react";
import { Cube } from "./data";

interface Props {
  cube: Cube;
}

const Cube = ({ cube }: Props) => {
  return (
    <svg viewBox="-102 -102 204 204">
      <line className="bg" x1="0" y1="-100" x2="86.6025403784" y2="-50" />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(60)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(120)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(180)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(240)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(300)"
      />
      <line className="bg" x1="0" y1="0" x2="0" y2="-100" />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(60)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(120)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(180)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(240)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(300)"
      />
      {cube.outer[0] && <line x1="0" y1="-100" x2="86.6025403784" y2="-50" />}
      {cube.outer[1] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(60)"
        />
      )}
      {cube.outer[2] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(120)"
        />
      )}
      {cube.outer[3] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(180)"
        />
      )}
      {cube.outer[4] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(240)"
        />
      )}
      {cube.outer[5] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(300)"
        />
      )}
      {cube.inner[0] && <line x1="0" y1="0" x2="0" y2="-100" />}
      {cube.inner[1] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(60)" />
      )}
      {cube.inner[2] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(120)" />
      )}
      {cube.inner[3] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(180)" />
      )}
      {cube.inner[4] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(240)" />
      )}
      {cube.inner[5] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(300)" />
      )}
    </svg>
  );
};

export default Cube;
