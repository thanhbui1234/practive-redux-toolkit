import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import List from "../feature/List";
import { Container } from "react-bootstrap";
import Navba from "../components/Navbar";
const Layout = () => {
  return (
    <>
      <Navba></Navba>
      <Container>
        <Tabs
          defaultActiveKey="USER"
          id="uncontrolled-tab-example"
          className="m-5"
        >
          <Tab eventKey="USER" title="USER">
            <List />
          </Tab>
          <Tab eventKey="Profile" title="Profile">
            <List />
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Layout;
