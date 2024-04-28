export const ButtonStyle = {
  variants: {
    primary: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.600",
      },
      borderRadius: 0,
      isLoading: {
        bg: "primary.400",
        _hover: {
          bg: "primary.400",
        },
      },
    },
    secondary: {
      bg: "secondary.500",
      color: "white",
      _hover: {
        bg: "secondary.600",
      },
      borderRadius: 0,
    },
    transparent: {
      bg: "transparent",
      color: "primary.500",
      _hover: {
        bg: "transparent",
      },
      padding: 0,
    },
  },
};
