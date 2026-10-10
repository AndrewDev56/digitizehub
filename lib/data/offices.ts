export type Office = {
  city: string;
  phone: string;
  address: string;
  mapUrl?: string;
};

export const offices: Office[] = [
  {
    city: "Calgary",
    phone: "+1 (646) 580-7135",
    address: "21 Panorama Hills Gdns NW, Calgary, AB T3K 4N3",
    mapUrl: "https://maps.google.com/?q=21+Panorama+Hills+Gdns+NW+Calgary+AB+T3K+4N3",
  },
  {
    city: "Georgia",
    phone: "+1 (646) 580-7135",
    address: "1720 Cumberland Point Dr SE, Suite 22, Marietta, GA 30067",
    mapUrl: "https://maps.google.com/?q=1720+Cumberland+Point+Dr+SE+Suite+22+Marietta+GA+30067",
  },
];

