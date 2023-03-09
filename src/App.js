import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
import Header from "./Header";
const tasks = [
  { id: 1, content: "Zrobic sniadanie", done: true },
  { id: 2, content: "zjesc pierogi", done: false },
];

const hideDoneTasks = true;

function App() {
  return (
    <Main>
      <Header />
      <Section title="Add new task" body={<Form />} />
      <Section
        title="To do list"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      /> 
      
    </Main>
  );
}

export default App;
