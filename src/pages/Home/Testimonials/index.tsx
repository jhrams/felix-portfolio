import TestimonialCard from './TestimonialCard';

import {
  VIEW_RECENT_WORK,
  TESTIMONIALS,
} from '../../../copies';

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <h2>{VIEW_RECENT_WORK}</h2>
      {TESTIMONIALS.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          companyIcon={testimonial.companyIcon}
          companyNameIcon={testimonial.companyNameIcon}
          testimonial1={testimonial.testimonial1}
          testimonial2={testimonial.testimonial2}
          author={testimonial.author}
          companyTitle={testimonial.companyTitle}
          sector={testimonial.sector}
          authorProfile={testimonial.authorProfile}
          color={testimonial.color}
        />
      ))}
    </div>
  );
}

export default Testimonials;