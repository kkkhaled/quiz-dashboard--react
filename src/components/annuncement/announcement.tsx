import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnouncements } from "../../store/announcement/announcement.slice";
import AnnouncementItem from "./announcementItem";
import { AppDispatch, RootState } from "../../store/store";
import SoftTypography from "../shared/compoents/elements/softTypography";
import { isEn } from "../../localize/localize";
import Loader from "../shared/compoents/loader";

const Announcement: React.FC = () => {
  // for get announcement from api
  const dispatch = useDispatch<AppDispatch>();
  const { announcements, loading, error } = useSelector(
    (state: RootState) => state.announcements
  );

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);
  // for handle loaing true or error
  if (loading) return <Loader />;
  if (error) return <div>network error, try again later .....</div>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "white",
        borderRadius: "7px",
        boxShadow: "3px 3px 3px 3px #ccc",
        marginY: 3,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <SoftTypography
          pl={isEn() ? 3 : "inherit"}
          pr={!isEn() ? "inherit" : 3}
        >
          Announcement
        </SoftTypography>
        <Button variant="text" sx={{ color: "#4fccc8" }}>
          <b>All</b>
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
        px={2}
      >
        {announcements.map((announcement: any) => (
          <AnnouncementItem
            key={announcement._id}
            announcement={announcement}
          />
        ))}
        <Box flexGrow={1} />
      </Box>
    </Box>
  );
};

export default Announcement;
