interface ListMenuProps {
  id: number;
  name: string;
  href: string;
}

const ProductListMenu: ListMenuProps[] = [
  {
    name: "Overview",
    href: "#",
    id: 1,
  },
  {
    name: "Pricing",
    href: "#",
    id: 2,
  },
  {
    name: "Overview",
    href: "#",
    id: 3,
  },
  {
    name: "Marketplace",
    href: "#",
    id: 4,
  },
  {
    name: "Features",
    href: "#",
    id: 5,
  },
  {
    name: "Integrations",
    href: "#",
    id: 6,
  },
];

const CompanyListMenu: ListMenuProps[] = [
  {
    name: "About",
    href: "#",
    id: 1,
  },
  {
    name: "Team",
    href: "#",
    id: 2,
  },
  {
    name: "Blog",
    href: "#",
    id: 3,
  },
  {
    name: "Career",
    href: "#",
    id: 4,
  },
];

const ConnectListMenu: ListMenuProps[] = [
  {
    name: "Contact",
    href: "/contact",
    id: 1,
  },
  {
    name: "Newsletter",
    href: "#",
    id: 2,
  },
  {
    name: "LinkedIn",
    href: "#",
    id: 3,
  },
  {
    name: "Career",
    href: "#",
    id: 4,
  },
];

export { ProductListMenu, CompanyListMenu, ConnectListMenu };
