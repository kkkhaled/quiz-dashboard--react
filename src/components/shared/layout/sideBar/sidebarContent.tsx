import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import i18n, { changeLanguage, isEn } from "../../../../localize/localize";
import SoftTypography from "../../compoents/elements/softTypography";
import { SoftColors } from "../../compoents/elements/colors";
import { menuItems } from "./sidebarItems.data";
import { useTranslation } from "react-i18next";

interface SideBarContentProps {
  boxWidth: string;
}

const SideBarContent: React.FC<SideBarContentProps> = ({ boxWidth }) => {
  // for access translate
  const { t } = useTranslation();
  //change language
  const handleLanguageChange = () => {
    if (i18n.language === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("en");
    }
  };
  return (
    <Box
      sx={{
        width: `${boxWidth}`,
        background: "linear-gradient(  #337c96,  #5ac7c4,  #4fccc8 )",
        minHeight: "100vh",
      }}
    >
      <SoftTypography
        size="lg"
        align="center"
        fontWeight={600}
        letterSpacing="0.4rem"
        color={SoftColors.WHITE}
        py="1.25rem"
      >
        Coligo
      </SoftTypography>
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem
            key={index}
            alignItems="center"
            sx={{
              color: "white",
              py: "1.6rem",
              "&:hover": {
                backgroundColor: "white",
                color: "#337C96",
                "& .MuiListItemIcon-root": {
                  color: "#337C96",
                },
              },
            }}
            component={Link}
            to="/"
          >
            {isEn() ? (
              <>
                <ListItemIcon sx={{ color: "white" }}>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </>
            ) : (
              <>
                <ListItemText primary={menuItem.textAr} />
                <ListItemIcon sx={{ color: "white", mx: 1 }}>
                  {menuItem.icon}
                </ListItemIcon>
              </>
            )}
          </ListItem>
        ))}
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              border: "1px solid white",
              paddingBottom: "5px",
            }}
            onClick={handleLanguageChange}
          >
            {t("sidebar.ArLang")}
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBarContent;
