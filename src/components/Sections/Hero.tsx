import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center px-4 sm:px-6 md:px-8 overflow-x-hidden">
        {/* Image background */}
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        {/* Content container */}
        <div className="z-10 max-w-screen-lg w-full">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm max-w-full break-words">
          <p
  role="img"
  aria-label="female technologist"
  className="text-orange-300 text-sm sm:text-base font-mono typewriter break-words text-center max-w-full"
>
  <span className="inline-block mr-1">👩‍💻</span>{' '}
  <span className="text-green-500">&lt;code&gt;</span> I develop pretty things - glad you stopped by ;).{' '}
  <span className="text-green-500">&lt;/code&gt;</span>
</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl break-words">
              {name}
            </h1>
            <div className="max-w-full break-words">{description}</div>
            <div className="flex gap-x-4 text-neutral-100 flex-wrap justify-center">
              <Socials />
            </div>
            <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-2">
              {actions.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Chevron down button */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
