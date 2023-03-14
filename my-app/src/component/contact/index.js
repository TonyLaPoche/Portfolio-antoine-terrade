// == Import
import { Button, Col, Icon, Row, Textarea, TextInput } from 'react-materialize';
// == Composant
const Contact = () => {
  return (
    <form action="POST" name="contact-form" className="container">
      <Row>
        <Col s={12} m={6}>
          <TextInput
            s={12}
            icon="person"
            data-length={10}
            id="TextInput-27"
            label="name"
          />
        </Col>
        <Col s={12} m={6}>
          <TextInput
            s={12}
            icon="person"
            data-length={10}
            id="TextInput-27"
            label="lastName"
          />
        </Col>
        <Col s={12} m={12}>
          <TextInput
            email
            s={12}
            icon="email"
            error="Wrong Email sir"
            id="TextInput-69"
            label="Email"
            success="Great"
            validate
          />
        </Col>
        <Col s={12} m={6}>
          <Textarea
            s={12}
            data-length={120}
            icon={<Icon>mode_edit</Icon>}
            id="Textarea-29"
            label="Textarea"
            placeholder="Votre message"
          />
        </Col>
        <Col s={12} m={6} className="center">
          <Button
            disabled={false}
            node="button"
            type="submit"
            waves="light"
            tooltip="Vérifier vos informations avant de cliquer !"
            tooltipOptions={{
              position: 'bottom',
            }}
            // className="right pulse"
            className={` ${true ? 'pulse' : ''}`}
          >
            Submit
            <Icon right>send</Icon>
          </Button>
        </Col>
      </Row>
    </form>
  );
};

// == Export
export default Contact;
