// Union Type 'block' | 'inline'
type Dimension = 'block' | 'inline';
type Direction = 'start' | 'end';

// Combination of string literals
type MarginProperty = `margin-${Dimension}-${Direction}`;
type MarginUnit = 'px' | 'vh' | 'vw';
type MarginValue = `${number}${MarginUnit}`;
type MarginDeclaration = [MarginProperty, MarginValue];

const margin: MarginDeclaration = ['margin-block-start', '16px'];
