import { profile } from "./site";

const whatsappNumber = profile.phone.replace(/\D/g, "");

export const contactChannels = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    href: `https://wa.me/${whatsappNumber}`,
    external: true,
  },
  {
    id: "location",
    label: "Location",
    value: profile.location,
  },
];
