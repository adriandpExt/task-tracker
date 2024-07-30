import { Accordion, TaskCard } from "~/components";

const Tasks = () => {
  return (
    <main className="bg-white rounded-lg p-5 h-full w-full space-y-5">
      <p className="font-bold text-lg">Tasks</p>

      <button className="btn btn-neutral border-2">Create Task</button>

      <section>
        <Accordion title="Open">
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
        </Accordion>
      </section>
      <section>
        <Accordion title="In Progress">
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
        </Accordion>
      </section>

      <section>
        <Accordion title="Done">
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
        </Accordion>
      </section>

      <section>
        <Accordion title="Backlogs">
          <TaskCard
            title="lorem"
            description="Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Deserunt libero natus voluptate
          distinctio, autem possimus perspiciatis, quaerat maxime nesciunt velit
          neque eligendi laborum minima perferendis saepe at itaque voluptas et?"
          />
        </Accordion>
      </section>
    </main>
  );
};

export default Tasks;
