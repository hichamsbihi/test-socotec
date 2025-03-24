// declare globale theme configuration 
export const theme= {
    colors : {
        primary : '#153376',
        secondary : '#4D4F5C'
    },
     fonts: {
    main: "'Source Sans Pro', sans-serif",
  },
  fontSizes: {
   small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
}

export type Theme = typeof theme;