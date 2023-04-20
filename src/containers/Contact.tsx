import Button from '../components/Button';
import Wrapper from '@/components/Wrapper';
import { contactSection } from '../utils/portfolio';
import { getSectionAnimation } from '@/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center text-xl !py-40 md:!py-52 !mb-0 "
      {...getSectionAnimation}
    >
      <p className="mb-3 text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
