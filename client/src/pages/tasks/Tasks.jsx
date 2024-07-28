import { Accordion } from "~/components";

const Tasks = () => {
  return (
    <main className="bg-white rounded-lg p-5 h-full w-full space-y-5">
      <p className="font-bold text-lg">Tasks</p>

      <button className="btn btn-neutral border-2">Create Task</button>

      <section>
        <Accordion title="Not Started">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            facere excepturi, ipsum perferendis tenetur, adipisci est expedita
            nisi maiores temporibus dolore. Quidem quis explicabo aliquid, eius
            consequatur soluta deserunt! Saepe!
          </p>
        </Accordion>
      </section>
      <section>
        <Accordion title="In Progress">asdsada</Accordion>
      </section>

      <section>
        <Accordion title="Completed"></Accordion>
      </section>
    </main>
  );
};

export default Tasks;
