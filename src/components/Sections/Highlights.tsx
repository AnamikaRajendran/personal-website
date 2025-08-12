import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import AACImage from '../../images/projects/aac.png';
import EurousecImage from '../../images/projects/eurousec.jpg';
import MlPlacementImage from '../../images/projects/mlplacement.png';
import Section from '../Layout/Section';

interface HighlightCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  slideLink?: string;
}

//note this is my PROJECT COMPONENT
/* eslint-disable react-memo/require-memo */
const HighlightCard: FC<HighlightCardProps> = ({imageSrc, title, description, link, slideLink}) => (
  <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-700 hover:shadow-orange-400 transition-all duration-300">
    <div className="relative w-full h-52 overflow-hidden bg-black rounded-xl p-2 flex items-center justify-center">
      <Image
        alt={title}
        className="max-h-full max-w-full object-contain rounded"
        height={192}
        src={imageSrc}
        width={500}
      />
    </div>
    <div className="p-4 text-gray-100">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm">
        {description}{' '}
        {link && (
          <>
            <a className="text-orange-300 underline" href={link} rel="noopener noreferrer" target="_blank">
              read more
            </a>
            <br />
          </>
        )}
        {slideLink && (
          <>
            You can also{' '}
            <a className="text-orange-300 underline" href={slideLink} rel="noopener noreferrer" target="_blank">
              access the slides here
            </a>
            .
          </>
        )}
      </p>
    </div>
  </div>
);


/* eslint-disable react-memo/require-memo */
const Highlights: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.Projects}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        {/* Projects */}
        {/* <h3 className="text-2xl font-semibold mb-6 text-orange-400">Projects</h3> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HighlightCard
            description="A study on how users perceive and trust secure deniability."
            imageSrc={EurousecImage}
            link="https://dl.acm.org/doi/10.1145/3688459.3688479"
            slideLink="https://eltnmsu-my.sharepoint.com/:p:/g/personal/arajen97_nmsu_edu/Eb-JrStgBLlEs4mZYgdilXYBnIjRL8eDTtYMdTkuNiuRGA?e=kPRdQA"
            title="Deniable Encrypted Messaging"
          />

          <HighlightCard
            description="Helps AAC users type faster with less effort using AI."
            imageSrc={AACImage}
            link=""
            slideLink="https://www.canva.com/design/DAGkt6bU0Zg/SrtZ8yDcdDaeEMHqKXlhiA/edit?utm_content=DAGkt6bU0Zg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            title="AI-Powered AAC Keyboard"
          />

          <HighlightCard
            description="Used Weka to assess students. My first research publication."
            imageSrc={MlPlacementImage}
            link="https://www.ijert.org/research/placement-training-using-machine-learning-IJERTV8IS060716.pdf"
            title="ML for Placement Training"
          />
        </div>
      </div>
    </Section>
  );
});

Highlights.displayName = 'Highlights';
export default Highlights;
