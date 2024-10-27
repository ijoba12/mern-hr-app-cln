import { Button } from "react-bootstrap";

export default function MyButton() {
  return (
    <div className="d-flex flex-column-reverse flex-md-row gap-1 w-100">
      <Button variant="outline-danger" className="cancel-btn mb-3">Cancel</Button>
      <Button variant="primary" type="submit" className="save-and-continue-btn">
        Save & Continue
      </Button>
    </div>
  );
}
