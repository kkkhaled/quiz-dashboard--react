import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { SoftColors } from "./colors";

enum SoftColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TEXT_PRIMARY = "TEXT_PRIMARY",
  TEXT_SECONDARY = "TEXT_SECONDARY",
}

interface SoftTypographyProps extends Omit<TypographyProps, "color"> {
  size?: "sm" | "md" | "lg" | "fixed";
  italic?: boolean;
  fontWeight?: number;
  color?: SoftColor | string;
}

const SoftTypography: React.FC<SoftTypographyProps> = ({
  size = "md",
  italic = false,
  fontWeight = 500,
  color,
  children,
  ...rest
}) => {
  let fontSize: string;
  switch (size) {
    case "sm":
      fontSize = "0.82rem";
      break;
    case "md":
      fontSize = "1rem";
      break;
    case "fixed":
      fontSize = "0.9rem";
      break;
    case "lg":
      fontSize = "1.4rem";
      break;
    default:
      fontSize = "1rem";
  }

  const getColor = (colorValue: SoftColor | string): string | undefined => {
    if (Object.values(SoftColor).includes(colorValue as SoftColor)) {
      return SoftColors[colorValue as SoftColor];
    }
    return colorValue as string | undefined;
  };

  return (
    <Typography
      variant="h6"
      fontStyle={italic ? "italic" : "normal"}
      fontWeight={fontWeight}
      color={color ? getColor(color) : undefined}
      sx={{ fontSize }}
      fontFamily="'Cairo', sans-serif"
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default SoftTypography;
