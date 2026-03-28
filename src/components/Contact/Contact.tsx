import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:waqarshakeel96@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:waqarshakeel96@gmail.com">waqarshakeel96@gmail.com</a>
        </div>
        <div>
          <a href="tel:+923164845916">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+923164845916">(+92) 3164845916</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
