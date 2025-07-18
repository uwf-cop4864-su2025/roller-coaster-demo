import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export function CoasterForm(props) {

    const [coasterName, setCoasterName] = useState("");
    const [coasterLocation, setCoasterLocation] = useState(""); 
    const [coasterUrl, setCoasterUrl] = useState("");

    const handleSubmit = (event) => {
      props.addCoaster({name: coasterName, location: coasterLocation, url: coasterUrl}); 
      event.preventDefault();

      // Clear the form
      setCoasterName("");
      setCoasterLocation("");
      setCoasterUrl("");
    };

    const nameChange = (event) => setCoasterName(event.target.value);
    const locationChange = (event) => setCoasterLocation(event.target.value);
    const urlChange = (event) => setCoasterUrl(event.target.value);

    return (
      <Container className="mt-4">
          <h2>Add a Coaster</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="coasterName">
              <Form.Label>Coaster Name</Form.Label>
              <Form.Control
                type="text"
                value={coasterName}
                onChange={nameChange}
                placeholder="Enter coaster name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="coasterLocation">
              <Form.Label>Coaster Location</Form.Label>
              <Form.Select onChange={locationChange} value={coasterLocation}>
                <option value="">Choose a Location</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Middle East">Middle East</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="coasterUrl">
              <Form.Label>Coaster URL</Form.Label>
              <Form.Control
                type="url"
                value={coasterUrl}
                onChange={urlChange}
                placeholder="https://example.com"
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>
        </Container>
    );
}
