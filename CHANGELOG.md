# 0.0.2 &mdash; January 8, 2017

- **ENHANCEMENT**: Added `o-grid` modifier helper for `flex-wrap: nowrap` ([#1](https://github.com/Ticketfly-UI/ticketfly-css-grid-objects/pull/1))
- **ENHANCEMENT**: Added `o-grid` modifier helper for each child cell filling
the container's full width. ([#1](https://github.com/Ticketfly-UI/ticketfly-css-grid-objects/pull/1))


# 0.0.1 &mdash; January 8, 2017

- Initial project setup and implementation of grid system.
  + Current selector semantics of `o-grid` and `o-grid-cell`
    - `.o-grid` is the containing flex element. This can be conceptualized
    as a row.
    - `.o-grid-cell` is the child of an `.o-grid`. This can be conceptualized
    as a column.
  + The idea behind not explicitly using `row` and `column` in the semantics is
  more conducive to the notion that grids and their cells can be infinitely
  nested and composed together. I'm still not strongly committed to either idea, yet, though.
