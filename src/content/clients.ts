export type Client = {
  slug: string;
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { slug: "ey", name: "EY", logo: "/clients/ey.png" },
  { slug: "gt", name: "Grant Thornton", logo: "/clients/gt.png" },
  { slug: "indusind", name: "IndusInd Bank", logo: "/clients/indusind.png" },
  { slug: "idfc", name: "IDFC FIRST Bank", logo: "/clients/idfc.png" },
  { slug: "bhel", name: "BHEL", logo: "/clients/bhel.png" },
  { slug: "adss", name: "ADSS", logo: "/clients/adss.png" },
];
