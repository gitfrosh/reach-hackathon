'reach 0.1';
'use strict';

export const main =
  Reach.App(
    {
      untrustworthyMaps: true,
      connectors: [ALGO],
    },
    [Participant('Creator', {
      meow: Fun([], Bytes(1000))
    }),
    ParticipantClass('Subscriber', {
      got: Fun([Bytes(1000)], Null)
    })],
    (A, B) => {
      A.publish();

      var [shouldContinue] = [true];
      invariant(balance() == 0);
      while (shouldContinue) {
        commit();

        A.only(() => {
          const meow = declassify(interact.meow());
        });
        A.publish(meow);

        B.interact.got(meow);

        continue;
      }

      commit();
      exit();
    });