export type TitleSegment = { text: string; italic?: boolean };

export type ProcessStep = { title: string; copy: string };

export type ServiceDetailContent = {
  slug: string;
  eyebrowTags: string[];
  heroH1: TitleSegment[][];
  heroSubtext: string;
  heroImageAlt: string;
  heroTitle: TitleSegment[][];
  heroBody: string;
  captivatingTitle: TitleSegment[][];
  captivatingBody: string;
  captivatingPills: string[];
  servicesTitle: TitleSegment[][];
  processTitle: TitleSegment[][];
  processSteps: ProcessStep[];
  industriesTitle: TitleSegment[][];
  industriesChips: string[];
  industriesBody: string;
  caseStudiesTitle: TitleSegment[][];
  auditCtaTitle: TitleSegment[][];
  auditCtaBody: string;
};
