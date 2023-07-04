import { createTheme } from '@mui/material/styles'

export const shades ={

yellow: {
    100: "#faf8f5",
    200: "#f4f1ec",
    300: "#efeae2",
    400: "#e9e3d9",
    500: "#e4dccf",
    600: "#b6b0a6",
    700: "#89847c",
    800: "#5b5853",
    900: "#2e2c29"
},

pink: {
    100: "#f9f0ed",
    200: "#f3e1db",
    300: "#ecd2c8",
    400: "#e6c3b6",
    500: "#e0b4a4",
    600: "#b39083",
    700: "#866c62",
    800: "#5a4842",
    900: "#2d2421"
},

gray: {
    100: "#f0f2f1",
    200: "#e0e4e4",
    300: "#d1d7d6",
    400: "#c1c9c9",
    500: "#b2bcbb",
    600: "#8e9696",
    700: "#6b7170",
    800: "#474b4b",
    900: "#242625"
},

black: {
    100: "#d3d9db",
    200: "#a7b3b7",
    300: "#7a8c92",
    400: "#4e666e",
    500: "#22404a",
    600: "#1b333b",
    700: "#14262c",
    800: "#0e1a1e",
    900: "#070d0f"
},
}

export const theme = createTheme({
    palette:{
        primary: {
            main: shades.yellow[500], // background 
            dark: shades.black[500]
        },
        secondary:{
            main:shades.pink[500]
        },
        neutral:{
            main: shades.gray[500]
        }  
    },

    typography: {
        fontFamily: ['Raleway', 'sans-serif'].join(","),
        fontSize: 11,

        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 48,
          },
          h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 36,
          },
          h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 20,
          },
          h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 14,
          },
    }
})