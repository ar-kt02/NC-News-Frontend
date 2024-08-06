import { format } from "date-fns";

export const formatUKDate = (date) => {
  return format(new Date(date), "dd MMMM yyyy");
};
