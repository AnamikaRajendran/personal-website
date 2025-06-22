import {CameraIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';
import Modal from './Modal';

const Portfolio: FC = memo(() => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Open modal
  const openModal = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const HoverOverlay: FC<{text: string}> = memo(({text}) => (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
      <span className="text-white font-semibold">{text}</span>
    </div>
  ));

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white flex items-center gap-2">
          A glimpse through my lens.
          <CameraIcon className="h-6 w-6 text-white" />
        </h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image, hoverText} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}
                  onClick={() => openModal(item)}>
                  <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
                  <HoverOverlay text={hoverText || 'Click to Enlarge'} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedItem && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="max-w-full max-h-[80vh] w-auto h-auto">
              <Image
                alt={selectedItem.title}
                className="rounded-lg object-contain max-w-full max-h-[80vh]"
                height={600}
                src={selectedItem.image}
                width={800} // these are intrinsic sizes
              />
            </div>
            <p className="mt-4 text-center text-white font-bold text-lg">{selectedItem.title}</p>
            <p className="mt-1 text-center text-gray-300 italic">{selectedItem.description}</p>
          </div>
        </Modal>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
