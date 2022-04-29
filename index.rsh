'reach 0.1';

export const main = Reach.App(() => {
  // a Creator aka blog publisher
  const Creator = Participant('Creator', {
    getPost: Fun([], Bytes(200)),
  });  
  // a blog Subscriber
  const Subscriber = Participant('Subscriber', {
    seePost: Fun([Bytes(200)], Null),
  });
  init();

  Creator.only(() => {
    const post = declassify(interact.getPost());
  });
  Creator.publish(post);
  commit();
  const outcome = post;
  Subscriber.only(() => interact.seePost(outcome));
  Subscriber.publish();
  commit();
  exit();
});