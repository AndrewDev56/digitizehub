export type Office = {
  city: string;
  phone: string;
  address: string;
  mapUrl?: string;
};

export const offices: Office[] = [
  {
    city: "US",
    phone: "+1 (929) 621-6055",
    address: "215 W 54th St, New York, NY 11220, USA",
    mapUrl: "https://maps.app.goo.gl/P3Mp2Quw8pJ5QGGW6",
  },
  // {
  //   city: "Georgia",
  //   phone: "+1 (929) 621-6055",
  //   address: "1720 Cumberland Point Dr SE, Suite 22, Marietta, GA 30067",
  //   mapUrl: "https://maps.google.com/?q=1720+Cumberland+Point+Dr+SE+Suite+22+Marietta+GA+30067",
  // },
];

