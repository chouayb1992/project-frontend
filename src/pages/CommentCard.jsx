import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function CommentCard({comment}) {
   

  return (
    <Card style={{ width: '12rem', margin: '1rem'}}>
      
      <Card.Body>
        <Card.Title>{comment.author.name}</Card.Title>
        <Card.Text>{comment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentCard;