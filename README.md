# SookD Landing Page

## Quick Start
```bash
npm install
npm run dev
```

---

## 🖼️ Images — วางไฟล์รูปใน `/public/img/`

| ชื่อไฟล์ | ใช้ที่ | คำแนะนำรูป |
|---|---|---|
| `logo.png` | Navbar (ซ้ายบน) | โลโก้ SookD วงกลม ขนาด ~80×80px PNG ใส |
| `logo-circle.png` | Footer (ซ้ายสุด) | โลโก้วงกลมสีขาว/ใส บน footer เขียว |
| `mascot.png` | Hero + Journey | ตัวนกสีเขียว-เหลือง PNG ใส |
| `mascot-big.png` | Footer | นกขนาดใหญ่กว่า PNG ใส |
| `hero-bg.jpg` | Hero fullscreen | ภาพภูเขาหิน Zhangjiajie จากดีไซน์ แนวนอน ≥1920px |
| `taste.jpg` | Journey card 1 | อาหาร (pad thai / จาน) สัดส่วนแนวตั้ง |
| `activity.jpg` | Journey card 2 | คนพายเรือคายัค สัดส่วนแนวตั้ง |
| `travel.jpg` | Journey card 3 | น้ำตก/ป่า สัดส่วนแนวตั้ง |
| `nature-quote-bg.jpg` | Nature Quote banner | ทิวเขาหมอก แนวนอน ≥1440px |
| `pursuit-river.jpg` | Pursuit of Feeling (ขวา) | ทะเลสาบ + บ้านแพในป่า แนวนอน |
| `luxury-local.jpg` | Luxury Travel (ซ้าย) | ผู้หญิงนั่งทอผ้าในสวน แนวนอน |
| `social-impact-bg.jpg` | Social Impact fullscreen | นาขั้นบันได + ชนเผ่า แนวนอน ≥1440px |

---

## 📁 Project Structure

```
sookd-landing/
├── public/
│   └── img/              ← วางรูปทั้งหมดที่นี่
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        ← Sticky nav + scroll bg change
│   │   ├── Hero.tsx          ← Full-height hero
│   │   ├── StartJourney.tsx  ← 3 category cards
│   │   ├── NatureQuote.tsx   ← Full-width quote banner
│   │   ├── PursuitFeeling.tsx ← Left text / Right image
│   │   ├── LuxuryTravel.tsx  ← Left image / Right text
│   │   ├── SocialImpact.tsx  ← Stats cards over bg
│   │   └── Footer.tsx        ← 4-col footer
│   ├── constants/
│   │   └── content.ts    ← ✏️ แก้ copy/text ทั้งหมดที่นี่
│   ├── types/
│   │   └── index.ts      ← TypeScript interfaces
│   ├── App.tsx           ← Global CSS + layout
│   └── main.tsx
└── index.html
```

## 🔗 Connecting to Backend

ใน `src/constants/content.ts` ให้แทน `SITE_CONTENT` ด้วย API call:

```ts
// Before (static)
export const SITE_CONTENT: SiteContent = { ... }

// After (dynamic)
export async function fetchContent(): Promise<SiteContent> {
  const res = await fetch('https://your-api.com/content');
  return res.json();
}
```

จากนั้นใน `App.tsx`:
```tsx
const [content, setContent] = useState<SiteContent | null>(null);
useEffect(() => { fetchContent().then(setContent); }, []);
if (!content) return <LoadingScreen />;
```
