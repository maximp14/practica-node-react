import { TComments } from "./PostList";

interface Props {
  comments: TComments[];
}

// type TComment = {
//   id: string;
//   content: string;
// };

const CommentList: React.FC<Props> = ({ comments }) => {
  // const renderedComments = comments.map((comment: TComments) => {
  //   return <li key={comment.id}>{comment.content}</li>;
  // });
  // return <ul>{renderedComments}</ul>;
  return (
    <ul>
      {comments.map((comment: TComments) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
  // return <div></div>;
};

export default CommentList;
