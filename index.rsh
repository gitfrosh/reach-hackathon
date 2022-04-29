'reach 0.1';

// blog by owner / creator
const BlogInterface = {
  owner: Address,
  createPost: Fun([], Bytes(200)),
};

// a blog Subscriber
const SubscriberInterface = {
  // owner: Address,
  seePost: Fun([Bytes(200)], Null),
};

export const main = Reach.App(() => {
  // a Creator aka blog publisher
  const Blog = Participant('Blog', BlogInterface);
    
  // a blog Subscriber
  const Subscriber = ParticipantClass('Subscriber', SubscriberInterface);
  init();

  Blog.only(() => {
    const post = declassify(interact.createPost());
  });

  Blog.publish(post);
  commit();
  const outcome = post;
  Subscriber.only(() => interact.seePost(outcome));
  Subscriber.publish();
  commit();
  exit();
});