import ContactForm from "./ContactForm";

const ContactPage = () => {
  const handleFormSubmit = (data: {
    email: string;
    // password: string;
    checked: boolean;
    message: string;
  }) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <div className="row">
        {/* Left: Contact Form */}
        <div className="col-md-6 mb-4">
          <ContactForm onSubmit={handleFormSubmit} submitLabel="Send Message" />
        </div>

        {/* Right: Google Map */}
        <div className="col-md-6">
          <div className="ratio ratio-4x3 rounded border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0178785796794!2d3.260269616059173!3d6.579626122650142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e2c6c693b0d%3A0x588f565f6dd3c50e!2s35%20Abatan%20St%2C%20Ifako-Ijaiye%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1625473680407!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
              title="Google Map"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
