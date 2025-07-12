const Message = () => {
  let count = 0;
  console.log("message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
