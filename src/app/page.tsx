//import Image from "next/image";
import data from '@/lib/data500.json';

export default function Home() {
  const items20 = data.slice(0, 10);

  return (
    <div className="flex flex-col gap-3 items-center p-4">
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
