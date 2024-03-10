import { useTranslation } from "react-i18next";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { SoftColors } from "./shared/compoents/elements/colors";
import SoftTypography from "./shared/compoents/elements/softTypography";

const Content: React.FC = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const flexDirection = isSmallScreen ? "column" : "row";

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "7px",
        boxShadow: "3px 3px 3px 3px #ccc",
      }}
      justifyContent="space-between"
    >
      <Box flex={3} p={3}>
        <Typography
          variant="h3"
          gutterBottom
          className="big-title"
          data-text={t("content.EXAMS_TIMES")}
        >
          {t("content.EXAMS_TIMES")}
        </Typography>
        <SoftTypography>{t("content.LOREM_IPSUM_BODY")}</SoftTypography>
        <SoftTypography
          italic={true}
          size="sm"
          color={SoftColors.ITALIC}
          mt="1rem"
        >
          {t("content.LOREM_IPSUM_ITALIC")}
        </SoftTypography>
        <Button
          variant="contained"
          sx={{
            background: "#4fccc8",
            color: "white",
            mt: "1rem !important",
            paddingX: 5,
            borderRadius: "5px",
          }}
        >
          {t("content.VIEW_EXAMPLE_TIPS")}
        </Button>
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          background: `url('https://th.bing.com/th/id/OIP.BSC4x_k7y6R_NN5kTgAe-AHaEo?rs=1&pid=ImgDetMain')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default Content;
