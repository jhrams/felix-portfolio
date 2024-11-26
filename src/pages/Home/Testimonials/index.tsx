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

const recentWork = <a className="recent-work" href={RECENT_WORK_URL}><i className="tv-icon fas fa-tv" />{VIEW_RECENT_WORK}</a>

const Testimonials: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 681;
  const isMediumTablet = windowWidth > 680 && windowWidth < 1024;
  const isLargeTablet = windowWidth > 1023 && windowWidth < 1440;
  const isDesktop = windowWidth > 1439;

  if (isDesktop) {
    const groups = splitArrayIntoGroups(testimonials, 3);
    groups[0].unshift(recentWork);
    return (
      <div className="testimonials">
        <img src="testimonials-circle.png" alt="testimonials-circle" className="testimonials-circle" />
        {groups.map((group, index) => (
          <div key={index} className="group">
            {group}
          </div>
        ))}
      </div>
    )
  }

  if (isMediumTablet) {
    const groups = splitArrayIntoGroups(testimonials, 2);
    return (
      <>
        {recentWork}
        <div className="testimonials">
          {groups.map((group, index) => (
            <div key={index} className="group">
              {group}
            </div>
          ))}
        </div>
      </>
    )
  }

  if (isLargeTablet) {
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