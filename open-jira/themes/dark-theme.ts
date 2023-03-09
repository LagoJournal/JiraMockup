import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background:{
      default: '#16161d'
    },
    primary:{
      main: '#fffff'
    },
    secondary:{
      main: '#19857b'
    },
    error:{
      main: red.A400
    },
  },

  components:{
    MuiAppBar:{
        defaultProps:{
          elevation: 0 
        },
        styleOverrides:{
          root:{
            backgroundColor: '#16161d'
          },
        }
    }
  }
  });