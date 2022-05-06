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
      got: Fun([Bytes(20)], Null)
    })],
    (A, B) => {
      A.publish(); commit();
      B.publish();
      const [shouldContinue] =
        parallelReduce([true])
          .invariant(balance() == 0)
          .while(shouldContinue)
          .case(
            A,
            () => {
              const meow = declassify(interact.meow);
              return ({msg: meow})
            },
            // (_) => meow,
            (meow) => {
              commit();
              A.publish();
      
              B.only(() => {
                interact.got(meow);
              });
              return [true];
            }
          )
          // .timeout(false);
      commit();
      exit();
    });
