import { useState, useEffect, useRef } from 'react';
import Comment from './Comment';
import comments from '../data/tree';

const CommentComponent = () => {
  // const [comments, setComments] = useState(initialComments);
  const [loading, setLoading] = useState(false);
  const commentListRef = useRef(null);

  useEffect(() => {
    // 当组件挂载时，可以在这里进行一些初始化操作
  }, []);

  const handleLoadMore = () => {
    if (!loading) {
      setLoading(true);
      // 模拟加载更多评论的异步操作
      setTimeout(() => {
        // 假设每次加载5条新评论
        const newComments = initialComments.slice(5);
        // setComments((prevComments) => [...prevComments, ...newComments]);
        setLoading(false);
      }, 1000);
    }
  };

  const onScroll = () => {
    const { current } = commentListRef;
    const isNearBottom = current.scrollHeight - current.scrollTop <= current.clientHeight + 100;
    if (isNearBottom) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    commentListRef.current.addEventListener('scroll', onScroll);
    return () => {
      commentListRef.current.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={commentListRef} className="comment-list">
      {comments.filter(item=>item.parentId==null).map((item) => (
        <Comment key={item.id} {...item} />
      ))}
      {loading && <div>Loading more comments...</div>}
    </div>
  );
};

export default CommentComponent;