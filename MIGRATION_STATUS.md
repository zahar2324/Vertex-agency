# Статус міграції з React на Next.js + TypeScript

## ✅ Виконано:

1. ✅ Створено структуру папок `app/components/`
2. ✅ Оновлено `layout.tsx` з SEO через Next.js metadata API
3. ✅ Оновлено `globals.css` з усіма стилями
4. ✅ Створено `page.tsx` з усіма компонентами
5. ✅ Оновлено `emailjs.ts` з TypeScript типами
6. ✅ Створено компоненти:
   - ✅ Hero.tsx
   - ✅ Header.tsx
   - ✅ Modal.tsx

## 🔄 Потрібно створити:

- [ ] WhyChooseUs.tsx
- [ ] Services.tsx
- [ ] About.tsx
- [ ] Pricing.tsx
- [ ] HowWeWork.tsx
- [ ] Reviews.tsx
- [ ] FAQ.tsx
- [ ] Contacts.tsx
- [ ] Footer.tsx
- [ ] ContactForm.tsx
- [ ] FloatingContactButton.tsx

## 📝 Інструкції:

Всі компоненти потрібно:
1. Конвертувати з `.jsx` в `.tsx`
2. Додати `'use client'` директиву на початку (для клієнтських компонентів)
3. Додати TypeScript типи для props
4. Замінити `import { EMAILJS_CONFIG } from '../config/emailjs'` на `import { EMAILJS_CONFIG } from '../config/emailjs'` (шлях залишається таким самим)
5. Замінити `<img>` на `<Image>` з Next.js для оптимізації (де потрібно)

## 🔧 Приклад конвертації:

**Було (JSX):**
```jsx
function Component({ prop }) {
  return <div>{prop}</div>;
}
```

**Стало (TSX):**
```tsx
'use client';

interface ComponentProps {
  prop: string;
}

export default function Component({ prop }: ComponentProps) {
  return <div>{prop}</div>;
}
```

