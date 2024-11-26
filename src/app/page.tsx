//import Image from "next/image";
import data from '@/lib/data500.json';

export default function Home() {
  const items20 = data.slice(0, 100);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Trae</h1>
      <ul>
        {items20.map((item, index) => (
          <li key={item.user_id || index}>
            {item.first_name} {item.last_name} - {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
