import { data } from "react-router-dom";

// categories
export const categories = ["Food", "Transport", "Entertainment"];

// expenses data
 export const initialExpenses = [
  { id: 1, description: "Groceries", amount: 50, category: "Food" },
  { id: 2, description: "Movie", amount: 15, category: "Transport" },
  { id: 3, description: "Bus ticket", amount: 5, category: "Entertainment" },
];

//navlinks

 export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact us", href: "/contact" },
  { label: "Expense", href: "/expense-tracker" },
];

// footer
 export const footerSections = [
  {
    title: "Products",
    expanded: true,
    links: [
      { label: "Website Hosting", href: "#" },
      { label: "Free Automated Wordpress", href: "#" },
      { label: "Migrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "Knowledge Base", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "Domains",
    links: [
      { label: "Domain Checker", href: "#" },
      { label: "Domain Transfer", href: "#" },
      { label: "Free Domain", href: "#" },
    ],
  },
];



