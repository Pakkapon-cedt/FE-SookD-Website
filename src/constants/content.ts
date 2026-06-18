import type { SiteContent } from '../types';

export const SITE_CONTENT: SiteContent = {
  navLinks: [
    { label: 'Experiences', href: '#experiences' },
    { label: 'Discover',    href: '#discover' },
    { label: 'Membership',  href: '#membership' },
    { label: 'About',       href: '#about' },
  ],

  hero: {
    heading: 'SookD',
    subheading: 'ท่องเที่ยวและร่วมเป็นส่วนหนึ่งในการดูแลโลกใบนี้',
  },

  journey: {
    heading: 'Start your Journey',
    cards: [
      { id: 'taste',    title: 'Taste',    href: '#taste' },
      { id: 'activity', title: 'Activity', href: '#activity' },
      { id: 'travel',   title: 'Travel',   href: '#travel' },
    ],
  },

  natureQuote: {
    heading: 'The best stories begin in nature',
    subtext:  'เรื่องราวที่ดีที่สุด เริ่มต้นจากธรรมชาติ',
  },

  pursuit: {
    heading:  'Pursuit of Feeling',
    body:     "Travel has always been about more than just going 'somewhere else'. For us, travel – breathless and beautiful – is about feeling somewhere else",
    ctaLabel: 'Discover more',
    ctaHref:  '#pursuit',
  },

  luxury: {
    heading: 'Our guide to luxury travel',
    body:    'We create bespoke luxury holidays for people who want more than just beautiful places.',
  },

  socialImpact: {
    heading:    'Social Impact',
    subheading: 'ผลลัพธ์จากการขับเคลื่อนและร่วมมือกับชุมชนตลอดปี 2025–2026 เพื่อสร้างความยั่งยืนในทุกมิติ',
    stats: [
      { id: 's1', value: '44%',  label: 'ลดการปล่อยก๊าซเรือนกระจก' },
      { id: 's2', value: '10K',  label: 'ต้นไม้ที่ฟื้นฟู (ต้น)' },
      { id: 's3', value: '300',  label: 'ลดขยะอินทรีย์ (ตัน)' },
      { id: 's4', value: '500k', label: 'สร้างรายได้ให้ชุมชน (บาท)' },
    ],
  },

  footer: {
    brand: {
      name: 'SookD',
      tagline:
        'มุ่งเชื่อมโยงนักเดินทางเข้ากับประสบการณ์ที่มีความหมาย การเดินทางไม่ควรเป็นเพียงการพักผ่อน แต่ควรเป็นโอกาสในการเรียนรู้ สร้างความสัมพันธ์กับธรรมชาติและร่วมเป็นส่วนหนึ่งในการดูแลโลกใบนี้ ด้วยการคัดสรรประสบการณ์คุณภาพจากผู้ให้บริการที่ใส่ใจ ทั้งผู้คน ชุมชน และสิ่งแวดล้อม',
    },
    address: {
      lines: ['00/0 หมู่ 0', 'ตำบลxxxxxxxx อำเภอxxxxxxxx', 'จังหวัดxxxxxxxx 00000'],
    },
    contact: {
      items: [
        { icon: '📞', label: '+66123456789',    href: 'tel:+66123456789' },
        { icon: '✉️', label: 'example@mail.com', href: 'mailto:example@mail.com' },
        { icon: '📘', label: 'example',          href: '#' },
        { icon: '🐦', label: '@example',         href: '#' },
        { icon: '▶️', label: 'example',          href: '#' },
      ],
    },
    copyright: 'Copyright © 2026 – VANA. All rights reserved.',
  },
};
