import { useState } from 'react';
import { Footer } from '@/components/Home/Footer';
import { AboutMe } from '@/components/Home/AboutMe';
import { Signature } from '@/components/Home/Signature';
import { Navigation } from '@/components/Home/Navigation';

export function Home() {
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

  return (
    <div className={`bg-home-page bg-cover bg-left bg-no-repeat h-screen overflow-scroll p-2`}>
      <div className='flex flex-col h-full'>
        <div className='flex items-start justify-start'>
          <Signature />
        </div>

        <div className='flex items-center justify-end h-full px-1 py-2'>
          {isDescriptionVisible ? (
            <AboutMe onClose={() => setDescriptionVisibility(false)} />
          ) : (
            <div className='w-full max-w-[460px]'>
              <Navigation onAboutMePress={() => setDescriptionVisibility(true)} />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
