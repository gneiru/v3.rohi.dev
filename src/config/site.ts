import { getAge } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

export const me = {
  tag: "gneiru",
  name: "Noel Rohi Garcia",
  discordID: "666483486735073312",
  host: "rohi.dev",
  email: "n@rohi.dev",
  job: {
    name: "Cargo Padala Express",
    link: "https://www.capex.com.ph/",
    color: "decoration-blue-500",
  },
};

export const siteConfig = {
  name: "ℝohi",
  url: "https://noel.rohi.dev",
  description: `${parseInt(
    getAge()
  )} y/o Software engineer based in Philippines`,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Guestbook",
      href: "/guestbook",
    },
    {
      title: "Links",
      href: "/links",
    },
  ],
  links: {
    twitter: "https://twitter.com/gneiru",
    github: "https://github.com/gneiru",
  },
  contacts: {
    email: "mailto:n@rohi.dev",
    twitter: "https://x.com/gneiru",
    linkedin: "https://linkedin.com/in/gneiru",
    calcom: "https://cal.com/gneiru",
    github: "https://github.com/gneiru",
    anilist: "https://anilist.co/user/nrohi/",
  },
};
