import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useMemo, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import CertificateImage from '../../images/achievements/certificate1.jpg';
import CertificateImage2 from '../../images/achievements/certificate2.jpg';
import EurousecImage from '../../images/achievements/eurousec.jpg';
import EurousecImage2 from '../../images/achievements/eurousec2.jpg';
import LightningImage from '../../images/achievements/lightningtalk.jpg';
import OralImage from '../../images/achievements/oralpresent.jpg';
import Section from '../Layout/Section';

const Achievements: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const {imageSrc} = testimonial;
  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  return (
    <Section className="bg-white text-black" noPadding sectionId={SectionId.Achievements}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
        <div className="z-10 w-full max-w-6xl px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Achievements</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {/* EuroUSEC Card */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-700 hover:shadow-orange-400 transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden group p-2 bg-black rounded-xl">
                  <div className="absolute inset-0 flex transition-transform duration-500 group-hover:-translate-x-full">
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="EuroUSEC Presentation"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={EurousecImage}
                        width={500}
                      />
                    </div>
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="EuroUSEC Sweden"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={EurousecImage2}
                        width={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-gray-100">
                  <h4 className="text-lg font-semibold mb-1">EuroUSEC 2024 - Sweden</h4>
                  <p className="text-sm">
                    Presented research on deniable encrypted messaging as the sole master’s student at the Sweden
                    conference, fully funded for travel.{' '}
                    <a
                      className="text-orange-300 underline"
                      href="https://dl.acm.org/doi/10.1145/3688459.3688479"
                      rel="noopener noreferrer"
                      target="_blank">
                      read more
                    </a>
                    .
                    <br />
                    You can also{' '}
                    <a
                      className="text-orange-300 underline"
                      href="https://eltnmsu-my.sharepoint.com/:p:/r/personal/arajen97_nmsu_edu/Documents/EuroUSEC_AnamikaRajendran.pptx?d=w2bad89bf046044b9b389996207629576&csf=1&web=1&e=qMQyjB"
                      rel="noopener noreferrer"
                      target="_blank">
                      access my slides here
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Oral Presentation Card */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-700 hover:shadow-orange-400 transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden group p-2 bg-black rounded-xl">
                  <div className="absolute inset-0 flex transition-transform duration-500 group-hover:-translate-x-full">
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="Presentation"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={OralImage}
                        width={500}
                      />
                    </div>
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="Presentation certificate"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={CertificateImage}
                        width={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-gray-100">
                  <h4 className="text-lg font-semibold mb-1">Second Prize - Presentation</h4>
                  <p className="text-sm">
                    Secured 2nd place in <strong>presentation</strong> at Research Creativity Week (NMSU),
                    competing against 35 participants.
                    <br />
                    You can also{' '}
                    <a
                      className="text-orange-300 underline"
                      href="https://docs.google.com/presentation/d/1U88vKeChKrZPGJmfByzngo64BIoRvG4SIDQniMYpfuw/edit?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank">
                      access my slides here
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Lightning Talk Card */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-700 hover:shadow-orange-400 transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden group p-2 bg-black rounded-xl">
                  <div className="absolute inset-0 flex transition-transform duration-500 group-hover:-translate-x-full">
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="Lightning Talk Presentation"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={LightningImage}
                        width={500}
                      />
                    </div>
                    <div className="w-full h-full flex items-center justify-center flex-shrink-0">
                      <Image
                        alt="Lightning Talk certificate"
                        className="max-h-full max-w-full object-contain rounded"
                        height={192}
                        src={CertificateImage2}
                        width={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-gray-100">
                  <h4 className="text-lg font-semibold mb-1">Second Place – Creativity Week</h4>
                  <p className="text-sm">
                    Won 2nd place in <strong>3-minute Lightning Talk</strong> at Research Creativity Week (NMSU),
                    competing against 20 participants.
                    <br />
                    You can also{' '}
                    <a
                      className="text-orange-300 underline"
                      href="https://eltnmsu-my.sharepoint.com/:p:/r/personal/arajen97_nmsu_edu/Documents/Anamika_Rajendran_3MT.pptx?d=w63fbcad328b348ea815e9442e438d3c6&csf=1&web=1&e=0f7PDd&nav=eyJzSWQiOjI1NywiY0lkIjo4NzQ3MDA1MjJ9"
                      rel="noopener noreferrer"
                      target="_blank">
                      access my slides here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Achievements;
