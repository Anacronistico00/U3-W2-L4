import SingleComment from './SingleComment';

const CommentsList = (props) => {
  const updateComments = props.updateComments;
  return (
    <>
      {props.comments.length > 0 ? (
        props.comments.map((singleComment) => {
          return (
            <li key={singleComment._id}>
              <SingleComment
                comment={singleComment.comment}
                id={singleComment._id}
                updateComments={updateComments}
              />
            </li>
          );
        })
      ) : (
        <p className='text-center'>Nessun commento disponibile</p>
      )}
    </>
  );
};

export default CommentsList;
