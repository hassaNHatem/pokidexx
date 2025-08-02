export const getPaginationRange = (
  current: number,
  total: number,
  maxVisible = 5
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (total <= maxVisible + 2) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  pages.push(1);

  if (left > 2) {
    pages.push("...");
  }

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < total - 1) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
};

export const capitalizeFirstLetter = (str: string) => {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
