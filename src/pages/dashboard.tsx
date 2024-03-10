import Content from "../components/content";
import Announcement from "../components/annuncement/announcement";
import withGuard from "../utils/withGuard";
import { Grid, useMediaQuery } from "@mui/material";
import Quiz from "../components/quiz/quiz";

const Dashboard = () => {
  const isLargeScreen = useMediaQuery("(min-width:850px)");
  return (
    <>
      <Content />
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={12} lg={9}>
          <Announcement />
        </Grid>
        <Grid item xs={12} md={12} lg={3} pl={isLargeScreen ? 2 : 0}>
          <Quiz />
        </Grid>
      </Grid>
    </>
  );
};

export default withGuard(Dashboard);
