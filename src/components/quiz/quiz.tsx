// Quiz.tsx
import React from "react";
import { Box, Button } from "@mui/material";
import QuizItem from "./quizItem";
import SoftTypography from "../shared/compoents/elements/softTypography";
import { useTranslation } from "react-i18next";
import { SoftColors } from "../shared/compoents/elements/colors";

const Quiz: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "white",
        borderRadius: "7px",
        boxShadow: "3px 3px 3px 3px #ccc",
        my: 3,
        px: 2,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        pb={1.2}
        px={0.5}
      >
        <Box>
          <SoftTypography>{t("quiz.dueTitle")}</SoftTypography>
          <SoftTypography
            italic={true}
            fontWeight={380}
            size="sm"
            color={SoftColors.ITALIC}
          >
            {t("quiz.dueDescription")}
          </SoftTypography>
        </Box>
        <Button
          variant="text"
          sx={{
            mb: "auto",
            color: "#4fccc8",
          }}
        >
          <b>{t("quiz.all")}</b>
        </Button>
      </Box>
      <Box>
        <QuizItem />
        <QuizItem />
      </Box>
    </Box>
  );
};

export default Quiz;
