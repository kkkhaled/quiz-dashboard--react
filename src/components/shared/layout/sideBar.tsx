import { Drawer } from "@mui/material";
import SideBarContent from "./sideBar/sidebarContent";

interface SidebarProps {
  isLargeScreen?: boolean;
  open?: boolean;
  onClose?: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ isLargeScreen, open, onClose }) => {
  return (
    <>
      {isLargeScreen ? (
        <SideBarContent boxWidth={"20%"} />
      ) : (
        <Drawer
          sx={{
            width: "20%",
          }}
          variant="temporary"
          open={open}
          onClose={onClose}
        >
          <SideBarContent boxWidth={"100%"} />
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
