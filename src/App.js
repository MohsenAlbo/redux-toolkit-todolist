import "./App.css";
import AddToDo from "./views/contents/AddToDo";
import TodoListView from "./views/contents/ToDoListView";
import "rsuite/styles/index.less";
import { FlexboxGrid } from "rsuite";
import { Grid, Row, Col, Divider } from "rsuite";
function App() {
  return (
    <div className="App">
      <Row className="show-grid">
        <Col lg={6} xl={8} xxl={6}></Col>
        <Col lg={12} xl={8} xxl={12}>
          <Divider>TODOLIST</Divider>
        </Col>
        <Col lg={6} xl={8} xxl={6}></Col>
      </Row>

      <Row className="show-grid">
        <Col lg={6} xl={8} xxl={6}></Col>
        <Col lg={12} xl={8} xxl={12}>
          <AddToDo />
          <Divider></Divider>
          <TodoListView />
        </Col>
        <Col lg={6} xl={8} xxl={6}></Col>
      </Row>
    </div>
  );
}

export default App;
