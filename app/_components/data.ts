export interface Cube {
  outer: [boolean, boolean, boolean, boolean, boolean, boolean];
  inner: [boolean, boolean, boolean, boolean, boolean, boolean];
}

export const rows: (Cube | null)[][] = [
  [
    {
      outer: [false, false, false, false, false, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, false, false, false, true, false],
      inner: [false, false, true, false, true, false],
    },
    {
      outer: [false, true, false, false, false, false],
      inner: [false, false, true, false, true, false],
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    {
      outer: [false, true, false, false, true, false],
      inner: [false, false, true, false, true, false],
    },
    {
      outer: [false, false, false, true, false, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, false, false, true, true, false],
      inner: [false, false, true, false, true, false],
    },
    {
      outer: [false, false, true, false, true, false],
      inner: [false, false, true, false, true, false],
    },
    {
      outer: [false, true, false, true, false, false],
      inner: [false, false, true, false, true, false],
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    {
      outer: [false, false, true, true, false, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, false, true, false, false],
      inner: [false, false, true, true, true, false],
    },
    {
      outer: [false, true, false, true, false, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, false, true, false, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, false, false, true, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, false, true, true, false],
      inner: [false, false, true, false, true, false],
    },
    {
      outer: [false, false, false, true, false, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [false, true, false, false, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, false, true, false, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [false, false, true, true, true, true],
      inner: [true, false, false, false, false, false],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [true, true, false, false, true, false],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [false, false, false, false, false, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [false, false, false, false, false, false],
    },
  ],
  [
    {
      outer: [false, false, true, true, false, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [false, false, true, true, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, false, true, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, true, true, true, false],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [false, true, true, false, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, true, true, true, false],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [false, true, false, true, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [true, true, true, false, true, false],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [false, false, true, true, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [false, false, false, true, true, true],
      inner: [true, false, false, true, true, false],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, true, true, true, true],
      inner: [true, false, false, false, false, false],
    },
    {
      outer: [true, true, true, true, true, false],
      inner: [true, false, false, false, false, false],
    },
    {
      outer: [false, true, false, true, false, true],
      inner: [true, false, true, false, true, false],
    },
  ],
  [
    {
      outer: [false, true, false, true, false, false],
      inner: [true, true, true, false, true, false],
    },
    {
      outer: [true, false, true, false, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [true, false, false, false, false, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [true, false, false, false, false, false],
    },
    {
      outer: [false, true, false, true, true, false],
      inner: [false, true, true, false, true, false],
    },
    {
      outer: [false, true, true, true, false, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [false, false, false, false, false, true],
      inner: [true, false, true, true, true, true],
    },
    {
      outer: [true, true, false, true, true, false],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [false, true, true, false, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [false, false, false, false, false, false],
    },
    null,
    null,
    null,
    null,
  ],
  [
    {
      outer: [false, true, true, true, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, true, true, true, false],
      inner: [true, false, true, true, false, false],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [false, true, false, true, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, false, true, false],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, false, true, false, true, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [false, true, true, false, true, false],
      inner: [true, true, true, false, true, false],
    },
    {
      outer: [true, false, true, true, true, false],
      inner: [true, false, false, true, true, false],
    },
    {
      outer: [false, true, true, false, false, true],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, true, false, true, false],
      inner: [false, false, true, true, true, false],
    },
    {
      outer: [true, false, false, true, true, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, false, true, true, false],
      inner: [false, false, true, true, true, false],
    },
  ],
  [
    {
      outer: [false, true, true, true, false, true],
      inner: [true, false, true, true, false, false],
    },
    {
      outer: [false, true, true, false, true, true],
      inner: [true, false, true, true, false, false],
    },
    {
      outer: [true, true, false, true, true, false],
      inner: [true, false, false, true, true, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [false, false, false, true, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [false, false, true, true, false, false],
    },
    {
      outer: [false, true, true, false, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [false, true, true, true, false, false],
      inner: [true, true, false, true, true, false],
    },
    {
      outer: [false, false, true, true, true, false],
      inner: [true, false, true, true, false, true],
    },
    {
      outer: [false, true, true, true, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [true, true, true, true, true, false],
      inner: [true, false, false, false, true, false],
    },
    {
      outer: [true, true, true, false, true, false],
      inner: [true, false, false, true, true, false],
    },
    {
      outer: [true, true, true, false, true, false],
      inner: [true, false, false, false, true, true],
    },
    {
      outer: [false, true, false, true, true, true],
      inner: [false, true, true, true, false, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, false, false, false, false],
    },
  ],
  [
    {
      outer: [false, false, false, false, false, true],
      inner: [true, true, true, true, true, true],
    },
    {
      outer: [true, false, false, false, false, false],
      inner: [true, true, true, true, true, true],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [false, true, true, true, true, false],
    },
    {
      outer: [true, true, false, false, true, false],
      inner: [false, false, true, true, true, true],
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    {
      outer: [false, true, true, true, true, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, true, false, false, false],
    },
    {
      outer: [false, true, false, true, true, true],
      inner: [true, true, true, true, false, false],
    },
    {
      outer: [false, true, false, true, true, true],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [false, true, true, true, true, true],
      inner: [true, false, true, true, false, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [true, true, false, true, false, false],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [true, true, false, true, true, false],
    },
    {
      outer: [true, false, false, false, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, false, false, false, true],
      inner: [true, false, true, true, true, true],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [false, true, false, true, true, false],
    },
    {
      outer: [false, true, false, false, false, true],
      inner: [true, true, true, true, true, true],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, false, true, false, false],
    },
  ],
  [
    {
      outer: [true, true, true, false, true, true],
      inner: [false, true, true, true, false, true],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, false, false, false, true],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, true, false, false, false, false],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [false, false, true, true, true, true],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [false, true, true, true, true, false],
    },
    {
      outer: [false, true, true, false, true, true],
      inner: [true, true, true, true, false, false],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [true, false, false, true, true, false],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [true, false, true, true, true, true],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [false, true, true, true, false, true],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [false, true, false, true, true, true],
    },
    null,
    null,
    null,
  ],
  [
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, true, false, true, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [false, false, true, true, true, false],
    },
    {
      outer: [false, true, true, false, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, true, true, true, false],
      inner: [true, false, false, true, true, true],
    },
    {
      outer: [true, true, true, true, true, false],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, false, true, true, true, true],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, true, true, false, true],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [true, false, true, true, true, true],
    },
    {
      outer: [true, true, false, false, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [false, true, false, false, true, true],
      inner: [true, true, true, true, true, true],
    },
    {
      outer: [true, true, false, true, true, false],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [false, true, true, true, true, false],
    },
    {
      outer: [true, true, true, false, true, true],
      inner: [false, false, true, true, true, true],
    },
    null,
  ],
  [
    {
      outer: [false, true, true, true, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, true, false, true, true, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [true, false, true, true, true, false],
    },
    {
      outer: [true, true, false, true, true, true],
      inner: [true, true, true, true, true, false],
    },
    {
      outer: [true, true, true, true, true, true],
      inner: [false, true, true, true, true, false],
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    {
      outer: [true, true, true, false, true, true],
      inner: [true, true, true, true, true, true],
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
];
