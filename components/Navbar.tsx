import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import LogoIcon from "../assets/pictures/logo_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.svg";

import styles from "../styles/components/Navbar.module.css";
import { backdropClasses } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, fontFamily: "LifeSaver" }}>
      <AppBar className={styles.navbar} position="static" color="primary">
        <Toolbar>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ minHeight: 80, padding: 1, flexGrow: 1 }}
          >
            <Box
              component="img"
              sx={{
                height: 75,
                width: 75,
              }}
              alt="The house from the offer."
              src={LogoIcon.src}
            />
            <Typography variant="h4" sx={{ fontFamily: "LifeSaver" }}>
              Pho Lover
            </Typography>
          </Box>

          <Box
            sx={{
              background: "black",
              color: "white",
              paddingX: 2,
              paddingY: 1,
              borderRadius: 20,
            }}
          >
            <Typography className={styles.links}>View the Menu</Typography>
          </Box>

          <Box
            sx={{
              paddingX: 2,
              paddingY: 1,
            }}
          >
            <Typography className={styles.links}>Home</Typography>
          </Box>

          <Box
            sx={{
              paddingX: 2,
              paddingY: 1,
            }}
          >
            <Typography className={styles.links}>About</Typography>
          </Box>

          {/* <Typography>Instagram</Typography> */}

          <Box 
            sx={{
              height: 50,
              width: 50,
            }}
            component="img" src={InstagramIcon.src} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
