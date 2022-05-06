'reach 0.1';
'use strict';

export const main =
  Reach.App(
    {
      untrustworthyMaps: true,
      connectors: [ALGO],
    },
    [Participant('Creator', {
      meow: Bytes(20)
    }),
    ParticipantClass('Subscriber', {
      // want: Fun([UInt], Null),
      got: Fun([Bytes(20)], Null)
    })],
    (A, B) => {
      // A.only(() => {
      //   const request = declassify(interact.request);
      // });
      // A.publish(request);
      // commit();

      // B.only(() => {
      //   interact.want(request);
      // });
      // B.pay(request);
      // commit();

      A.only(() => {
        const meow = declassify(interact.meow);
      });
      A.publish(meow);
      // transfer(request).to(A);
      commit();

      B.only(() => {
        interact.got(meow);
      });
      exit();
    });
