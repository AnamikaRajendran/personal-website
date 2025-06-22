import {FC, memo} from 'react';
import Image from 'next/image';
import Section from '../Layout/Section';
import {SectionId} from '../../data/data';
import EurousecImage from '../../images/projects/eurousec.jpg';
import AACImage from '../../images/projects/aac.png';
import MlPlacementImage from '../../images/projects/mlplacement.png';

interface HighlightCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  slideLink?: string;
}

//note this is my PROJECT COMPONENT
const HighlightCard: FC<HighlightCardProps> = ({ imageSrc, title, description, link, slideLink }) => (
    <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-700 hover:shadow-orange-400 transition-all duration-300">
  <div className="relative w-full h-52 overflow-hidden bg-black rounded-xl p-2 flex items-center justify-center">
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={192}
      className="max-h-full max-w-full object-contain rounded"
    />
  </div>
  <div className="p-4 text-gray-100">
    <h4 className="text-lg font-semibold mb-1">{title}</h4>
    <p className="text-sm">
      {description}{' '}
      {link && (
        <>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 underline"
          >
            read more
          </a>
          <br />
        </>
      )}
      {slideLink && (
        <>
          You can also{' '}
          <a
            href={slideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 underline"
          >
            access the slides here
          </a>
          .
        </>
      )}
    </p>
  </div>
</div>

  );
  

const Highlights: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Projects} className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        {/* Projects */}
        {/* <h3 className="text-2xl font-semibold mb-6 text-orange-400">Projects</h3> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <HighlightCard
                imageSrc={EurousecImage}
                title="Deniable Encrypted Messaging"
                description="A study on how users perceive and trust secure deniability."
                link="https://dl.acm.org/doi/10.1145/3688459.3688479"
                slideLink="https://eltnmsu-my.sharepoint.com/:p:/r/personal/arajen97_nmsu_edu/Documents/EuroUSEC_AnamikaRajendran.pptx?d=w2bad89bf046044b9b389996207629576&csf=1&web=1&e=qMQyjB"
            />

            <HighlightCard
                imageSrc={AACImage}
                title="AI-Powered AAC Keyboard"
                description="Helps AAC users type faster with less effort using AI."
                link="https://example.com/aac-paper"
                slideLink="https://www.canva.com/design/DAGkt6bU0Zg/SrtZ8yDcdDaeEMHqKXlhiA/edit?utm_content=DAGkt6bU0Zg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />  

            <HighlightCard
                imageSrc={MlPlacementImage}
                title="ML for Placement Training"
                description="Used Weka to assess students. My first research publication."
                link="https://www.ijert.org/research/placement-training-using-machine-learning-IJERTV8IS060716.pdf"
            />
        </div>
      </div>
    </Section>
  );
});

Highlights.displayName = 'Highlights';
export default Highlights;
