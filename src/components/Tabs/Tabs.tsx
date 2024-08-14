import { useState } from 'react';

interface Tab {
  title: string;
  content: string;
}

const tabsData: Tab[] = [
  { title: 'V', content: 'Amantes de la música que la expresamos a través del Rock.' },
  { title: 'D', content: 'Te invitamos a que nos conozcas con nuestras canciones.' },
  { title: 'M', content: 'Pan y Vino, el que no vino de marte para que carajo vino.' },
];

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = useState<number | null>(null);

  return (
    <div className="flex flex-col space-y-2">
      {tabsData.map((tab, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
            openTab === index ? 'w-48' : 'w-24'
          } bg-gray-800 text-white shadow-lg cursor-pointer hover:bg-gray-700
          ${index === 0 ? 'rounded-r-lg' : 'rounded-r-lg rounded-l-none'} ${
            index === tabsData.length - 1 ? 'rounded-l-lg' : ''
          }`}
          onClick={() => setOpenTab(openTab === index ? null : index)}
        >
          <div className="p-3 text-center">{tab.title}</div>
          {openTab === index && (
            <div className="p-4 bg-gray-700 text-right rounded-b-lg">
              {tab.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
