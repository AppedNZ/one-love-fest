import { ABOUT, CONTACT, FAQ, HARD_COPY_TICKETS, NEWS, SITEMAP, TICKETS } from "./constants";

export const header_links = [
  { url: "/", label: "Home" },
  { url: ABOUT, label: "About" },
  { url: TICKETS, label: "Tickets" },
  // { url: CAMPING, label: "Camping" },
  // { url: PAYMENT_PLAN, label: "Payment Plan" },
  { url: FAQ, label: "FAQ" },
  { url: NEWS, label: "News" },
  { url: CONTACT, label: "Contact" },
  { url: SITEMAP, label: "Sitemap" },
  { url: HARD_COPY_TICKETS, label: "Hard Copy Tickets" },
];
