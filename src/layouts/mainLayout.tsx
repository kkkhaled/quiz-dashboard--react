import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SideBar from "../components/shared/layout/sideBar";
import Header from "../components/shared/layout/header";
import { useState } from "react";
import { SoftColors } from "../components/shared/compoents/elements/colors";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:960px)");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isLargeScreen ? (
        <SideBar isLargeScreen={true} />
      ) : (
        <SideBar open={isSidebarOpen} onClose={handleToggleSidebar} />
      )}
      <Box width="100%" sx={{ backgroundColor: SoftColors.MAIN_BG }}>
        <Header
          isLargeScreen={isLargeScreen}
          onToggleSidebar={handleToggleSidebar}
        />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
