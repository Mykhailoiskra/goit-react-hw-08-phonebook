import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <Card className={s.card}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Phone: {number}</Card.Text>
        <Button variant="primary" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

//  <>
//       <div className={s.contactList__text}>
//         <p className={s.contactList__name}>{name}</p>
//         <p className={s.contactList__number}>Tel: {number}</p>
//       </div>
//       <button className={s.contactList__deleteBtn} onClick={onDelete}>
//         Delete
//       </button>
//     </>
export default Contact;
