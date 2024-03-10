import { Box, Grid, Button } from "@mui/material";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import SoftTypography from "../shared/compoents/elements/softTypography";
import { SoftColors } from "../shared/compoents/elements/colors";
import { useTranslation } from "react-i18next";

const QuizItem = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        boxShadow: "0px 3px #eee",
        mb: 1,
      }}
    >
      <Grid container direction="column" rowGap={0.2}>
        <Grid item>
          <Box display="flex" alignItems="center">
            <ScheduleSendOutlinedIcon sx={{ color: "#4fccc8", mr: 1 }} />
            <SoftTypography fontWeight={400}>
              {t("quizItem.unitQuiz")}
            </SoftTypography>
          </Box>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={3}>
            <SoftTypography
              fontWeight={380}
              color={SoftColors.GRAY}
              size="fixed"
            >
              {t("quizItem.course")}
            </SoftTypography>
          </Grid>
          <Grid item xs={9}>
            <SoftTypography
              fontWeight={380}
              color={SoftColors.GRAY}
              size="fixed"
            >
              {t("quizItem.unitQuiz")}
            </SoftTypography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={3}>
            <SoftTypography
              fontWeight={380}
              size="fixed"
              color={SoftColors.GRAY}
            >
              {t("quizItem.topic")}
            </SoftTypography>
          </Grid>
          <Grid item xs={9}>
            <SoftTypography
              fontWeight={380}
              size="fixed"
              color={SoftColors.GRAY}
            >
              {t("quizItem.unitQuiz")}
            </SoftTypography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={3}>
            <SoftTypography
              fontWeight={380}
              size="fixed"
              color={SoftColors.GRAY}
            >
              {t("quizItem.dueTo")}
            </SoftTypography>
          </Grid>
          <Grid item xs={9}>
            <SoftTypography
              fontWeight={380}
              size="fixed"
              color={SoftColors.GRAY}
            >
              {t("quizItem.unitQuiz")}
            </SoftTypography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          my={1}
          sx={{
            width: "100%",
          }}
        >
          <Box width="100%">
            <Button
              variant="outlined"
              sx={{
                color: "#4fccc8",
                borderColor: "#4fccc8",
                width: "100%",
              }}
            >
              <b> {t("quizItem.startQuiz")}</b>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuizItem;
