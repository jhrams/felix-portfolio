import TestimonialCard from './TestimonialCard';
import useWindowWidth from '../../../hooks/useWindowWidth';
import { splitArrayIntoGroups } from '../../../utils';

import {
  VIEW_RECENT_WORK,
  RECENT_WORK_URL,
  TESTIMONIALS,
} from '../../../copies';

import './styles.css'

const testimonials = TESTIMONIALS.map((testimonial, index) => (
  <TestimonialCard
    key={index}
    {...testimonial}
  />
))

const recentWork = (
  <div className="recent-work">
    <i className="fas fa-tv" />
    <a href={RECENT_WORK_URL}>{VIEW_RECENT_WORK}</a>
  </div>
)

const Testimonials: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 681;
  const isTablet = windowWidth > 680 && windowWidth < 1440;
  const isDesktop = windowWidth > 1439;

  if (isDesktop) {
    const groups = splitArrayIntoGroups(testimonials, 3);
    groups[0].unshift(recentWork);
    return (
      <div className="testimonials">
        {groups.map((group, index) => (
          <div key={index} className="group">
            {group}
          </div>
        ))}
      </div>
    )
  }

  if (isTablet) {
    const groups = splitArrayIntoGroups([recentWork, ...testimonials], 2);
    return (
      <div className="testimonials">
        {groups.map((group, index) => (
          <div key={index} className="group">
            {group}
          </div>
        ))}
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="testimonials">
        {recentWork}
        {testimonials}
      </div>
    )
  };
}

export default Testimonials;