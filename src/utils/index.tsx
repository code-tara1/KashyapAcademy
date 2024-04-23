export const formatNumber = (num: number) => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else {
    return num;
  }
};
