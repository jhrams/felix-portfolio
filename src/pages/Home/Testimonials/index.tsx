import TestimonialCard from './TestimonialCard';

import {
  VIEW_RECENT_WORK,
  RECENT_WORK_URL,
  TESTIMONIALS,
} from '../../../copies';

import './styles.css'

const Testimonials: React.FC = () => (
  <div className="testimonials">
    <div className="recent-work">
      <i className="fas fa-tv" />
      <a href={RECENT_WORK_URL}>{VIEW_RECENT_WORK}</a>
    </div>
    {TESTIMONIALS.map((testimonial, index) => (
      <TestimonialCard
        key={index}
        {...testimonial}
      />
    ))}
  </div>
);

export default Testimonials;