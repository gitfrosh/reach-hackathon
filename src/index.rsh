'reach 0.1';
'use strict';

export const main =
  Reach.App(
    {
      untrustworthyMaps: true,
      connectors: [ALGO],
    },
    [Participant('Creator', {
      meow: Fun([], Bytes(500))
    }),
    ParticipantClass('Subscriber', {
      got: Fun([Object({
        text: Bytes(500),
        owner: Address
      })], Null)
    })],
    (A, B) => {
      A.publish();

      var [shouldContinue] = [true];
      invariant(balance() == 0);
      while (shouldContinue) {
        commit();

        A.only(() => {
          const meow = declassify(interact.meow());
          const owner = this
        });
        A.publish(meow, owner);

        B.interact.got({
          text: meow,
          owner: owner
        });

        continue;
      }

      commit();
      exit();
    });