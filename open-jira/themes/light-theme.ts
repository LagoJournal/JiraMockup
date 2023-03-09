import { createTheme } from "@mui/material";
import { grey,red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      background:{
        default: grey[300]
      },
      primary:{
        main: '#16161d'
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
              backgroundColor: grey[300],
              color: '#16161d'
            },
          }
      }
    }
  });