
import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: ["CustomFont", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'CustomFont',
            fontStyle: 'normal',
            fontWeight: 600,
            src: `
            url('/fonts/LetterSeri/HedvigLettersSerif-Regular-VariableFont_opsz.ttf') format('truetype'),
            `,
          },
        ],
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    primary: {
      main: '#bb86fc',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: ["CustomFont", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'CustomFont',
            fontStyle: 'normal',
            fontWeight: 600,
            src: `
            url('/fonts/LetterSeri/HedvigLettersSerif-Regular-VariableFont_opsz.ttf') format('truetype'),
            `,
          },
        ],
      },
    },
  },
});
