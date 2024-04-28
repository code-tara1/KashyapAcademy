import { Box } from "@chakra-ui/react";
import React from "react";

interface HTMLDivProps extends React.HTMLAttributes<HTMLDivElement> {
  data: string;
  textColor?: string;
  fontSize?: object;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  display?: string;
  noOfLines?: number;
  displayButton?: boolean;
}
export const CKEditor: React.FC<HTMLDivProps> = ({
  data,
  textColor,
  fontSize,
  noOfLines,
}) => {
  return (
    <Box>
      <Box
        noOfLines={noOfLines ? noOfLines : undefined}
        dangerouslySetInnerHTML={{ __html: data }}
        textColor={textColor}
        fontSize={fontSize}
      />
    </Box>
  );
};
