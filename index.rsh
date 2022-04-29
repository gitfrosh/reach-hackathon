'reach 0.1';

// blog by owner / creator
const BlogInterface = {
  createStream: Fun([], Object({
    blogOwner: Address,
    id: Bytes(200)
  }))
};

// blog post
const PostInterface = {
  createPost: Fun([], Object({
    owner: Address,
    text: Bytes(200)
  })),
};

// a blog Subscriber
const SubscriberInterface = {
  subscribe: Fun([], Null),
};


export const main = Reach.App(
  {},
  [
    Participant('Blog', BlogInterface), Participant('Post', PostInterface), ParticipantClass('Subscriber', SubscriberInterface),
  ],
  (Blog, Post, Subscriber) => {
    // const showOutcome = (winners) =>
    //   each([Funder, Buyer], () => interact.showOutcome(winners));
    Blog.only(() => {
      const _params = interact.createStream();
      const [blogOwner, id] = declassify([_params.blogOwner, _params.id]);
    });
    Blog.publish(blogOwner, id);
    commit();

    Post.only(() => {
      const __params = interact.createPost();
      const [owner, text] = declassify([__params.owner, __params.text]);
      assume(owner == blogOwner)
    });
   
    Post.publish(text);
    commit();

    Subscriber.only(() => interact.subscribe());
    Subscriber.publish();
    commit();

    // const outcome = post;
    // Subscriber.only(() => interact.seePost(outcome));
    // Subscriber.publish();
    // commit();

  });