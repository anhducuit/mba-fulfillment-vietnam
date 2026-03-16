export type SiteConfig = {
  name: string;
  domain: string;
  logo: string;
  primaryColor: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  address: string;
  description: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
};

export const sites: Record<string, SiteConfig> = {
  omsmba: {
    name: "MBA Fulfillment Việt Nam",
    domain: "omsmba.online",
    logo: "/logo.png",
    primaryColor: "primary",
    email: "mbafulfillmentvn@gmail.com",
    phone: "0948078599",
    phoneFormatted: "0948 078 599",
    address: "40/8 Lê Thị Ánh, Phường Tân Thới Nhất, Quận 12, TPHCM",
    description: "Giải pháp fulfillment hàng đầu Việt Nam, đồng hành cùng sự phát triển kinh doanh thương mại điện tử của bạn.",
    socials: {
      facebook: "https://www.facebook.com/mbafulfillment",
      linkedin: "https://www.linkedin.com/company/110198128",
      youtube: "#",
    },
  },
  dichvukho: {
    name: "Dichvukho.vn",
    domain: "dichvukho.vn",
    logo: "/logo.png",
    primaryColor: "emerald", // Using emerald/slate for the specialized site
    email: "mbafulfillmentvn@gmail.com",
    phone: "0948078599",
    phoneFormatted: "0948 078 599",
    address: "Hệ thống kho bãi tại TPHCM & Hà Nội",
    description: "Dịch vụ kho bãi, đóng gói và vận chuyển trọn gói dành cho mọi nhà bán hàng tại TPHCM và Hà Nội.",
    socials: {
      facebook: "https://www.facebook.com/mbafulfillment",
      linkedin: "https://www.linkedin.com/company/110198128",
    },
  },
};

export const getSiteConfig = () => {
  if (typeof window === "undefined") return sites.omsmba;
  
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  const search = window.location.search;

  if (hostname === "dichvukho.vn" || pathname.startsWith("/dichvukho") || search.includes("site=dichvukho")) {
    return sites.dichvukho;
  }
  
  return sites.omsmba;
};
