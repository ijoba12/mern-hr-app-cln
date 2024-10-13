import { Button } from "react-bootstrap";

export default function MyButton() {
  return (
    <div className="d-md-flex gap-3 w-100">
      <Button variant="primary" type="submit" className="save-and-continue-btn">
        Save & Continue
      </Button>
      <Button variant="outline-danger" className="cancel-btn">Cancel</Button>
    </div>
  );
}
