export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  promptReference?: string;
}

export const imageConfig: Record<string, ImageAsset> = {
  sbeHero: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
    alt: 'S.B. Enterprise commercial business headquarters, accounting operations and IT workspace at Kolkata',
    width: 1920,
    height: 1080,
    promptReference: 'Image Prompt 1: S.B. Enterprise Hero - Commercial B2B workspace photography',
  },
  tallyHero: {
    src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=85',
    alt: 'TallyPrime accounting software workspace showing business financial reports, GST vouchers and ledgers',
    width: 1920,
    height: 1080,
    promptReference: 'Image Prompt 2: TallyPrime Hero Background photography',
  },
  productsPortfolio: {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85',
    alt: 'S.B. Enterprise industrial products portfolio and business software solutions range',
    width: 1920,
    height: 1080,
    promptReference: 'Image Prompt 3: S.B. Enterprise Product Portfolio photography',
  },
  nexiogHero: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85',
    alt: 'Nexiog digital services studio, web development team and custom software engineering setup',
    width: 1920,
    height: 1080,
    promptReference: 'Image Prompt 4: Nexiog Product Hero photography',
  },
  tallySection: {
    src: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Financial documents, calculator, and TallyPrime software books',
    width: 1200,
    height: 900,
    promptReference: 'Image Prompt 5: TallyPrime Section Visual',
  },
  supportVisual: {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    alt: 'S.B. Enterprise technical support desk assisting Kolkata clients',
    width: 1200,
    height: 900,
    promptReference: 'Image Prompt 6: Customer Support Section',
  },
  contactBg: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Minimal editorial business background for enquiry section',
    width: 1600,
    height: 900,
    promptReference: 'Image Prompt 7: Contact Section Background',
  },
};

export function getImageAsset(key: string): ImageAsset {
  return imageConfig[key] || imageConfig.sbeHero;
}
