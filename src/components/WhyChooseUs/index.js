import './index.css'

const whyChooseUsList = [
  {
    id: 1,
    heading: 'NABL Accredited Labs',
    text: 'Get accurate and safe from our NABL-certified lan partners.',
    imageUrl: 'https://i.ibb.co/dmYCHcY/NABL-lab-logo.jpg',
  },
  {
    id: 2,
    heading: 'Value experience',
    text:
      'Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier life style.',
    imageUrl: 'https://i.ibb.co/5jKSfSv/men-doctor.jpg',
  },
  {
    id: 3,
    heading: 'Timely collections',
    text:
      'We collect samples timely to prevent treatment delays and ensure your continued well being.',
    imageUrl: 'https://i.ibb.co/SQ4Qh2L/lady-doctor-image.jpg',
  },
  {
    id: 4,
    heading: 'Transparency',
    text:
      'Enjoy hassle free medical assistance with our tarsnparent approach. We prioritize transparency for your smooth medical journey.',
    imageUrl: 'https://i.ibb.co/5jKSfSv/men-doctor.jpg',
  },
]

const WhyChooseUs = () => (
  <div className="why-choose-us-page-container">
    <h1 className="why-choose-us-heading">
      Why <span className="choose-heading ">choose</span> us ?
    </h1>
    <p className="why-choose-us-text">
      We want you and your heart to be healthy so you can live a happy life!
    </p>

    <div className="why-choose-us-card-lists-container">
      <ul className="card-list-container">
        {whyChooseUsList.map(eachChoose => (
          <li key={eachChoose.id} className="why-choose-us-card-container">
            <img
              src={eachChoose.imageUrl}
              alt="why-choose-us-card-logo"
              className="why-choose-us-card-image"
            />
            <h1 className="why-choose-us-card-heading">{eachChoose.heading}</h1>
            <p className="why-choose-us-card-text">{eachChoose.text}</p>
          </li>
        ))}
      </ul>
      <div className="why-choose-us-image-container">
        <img
          src="https://i.ibb.co/KhRCqm6/doctor-image.jpg"
          alt="why-choose-doctor-pic"
          className="why-choose-doctor-image"
        />
      </div>
    </div>
  </div>
)

export default WhyChooseUs
