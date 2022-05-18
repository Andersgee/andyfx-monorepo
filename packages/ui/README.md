# ui

components are structured by [atomic-design](https://github.com/danilowoz/react-atomic-design). Summary of rules:

#### atoms

Smallest possible components. (think button, title, input, paper)

- **Can** have state.
- **Can not** have actions affecting other things.
- **Can not** have margin/position.

#### molecules

Composition of one or more atoms. (think card or dropdown menu)

- **Can** have actions affecting other things.
- **Can not** have margin/position
  - can set margin/position on atoms.

#### organisms

Combination of molecules/atoms. (think navbar, section or footer)

- **Can** have styling/color.
- **Can not** have margin/position
  - can set margin/position on atoms.
  - can set margin/position on molecules.

#### templates

Set placement/position and context of smaller components. (think display: grid)

- **Can not** have styling/color (only positioning).

#### pages

- Provides templates with data/content and renders them (think ContextProvider)
