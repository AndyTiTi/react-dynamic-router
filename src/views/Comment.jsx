import PropTypes from 'prop-types';
import comments from '../data/tree';
import "./comment.css"
function Comment ({ content, id, parentId }) {
  const paddingClass = parentId !== null ? 'left-padding' : '';
  console.log(paddingClass);
  return (
    <div className='shadow p-4 m-4'>
      *{id} - {content}
      {
        comments.filter(item => item.parentId == id).map(item => <Comment key={item.id} {...item} />)
      }
    </div>
  )
}

export default Comment

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  parentId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      type: 'null', // 这将允许parentId为null
    }),
  ]),
}
