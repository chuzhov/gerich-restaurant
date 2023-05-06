// Note: Awards & recognition section

import SubHeader from '../../components/SubHeader/SubHeader';
import AwardCard from '../../components/AwardCard/AwardCard';
import { images, awards } from '../../constants';

import './Laurels.css';

const Laurels = () => (
  <section className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeader title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {awards.map(award => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </section>
);

export default Laurels;
