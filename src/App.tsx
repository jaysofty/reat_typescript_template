import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Message from "./components/Message";
import TestimonialCard from "./components/About";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import image from "./assets/AqR3nn8p_400x400.jpg";
import ExpandableText from "./components/ExpandableText";
import ExpenseForm from "./components/ExpenseForm";
import { footerSections, navLinks } from "./data/datas";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div>
      <NavBar navItems={navLinks} />
      <Routes>
        <Route path="/" element={<ExpenseList />} />

        <Route
          path="/about"
          element={
            <TestimonialCard
              imageSrc={image}
              quote={
                <ExpandableText maxChars={100}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  impedit magnam maiores modi aspernatur saepe voluptatibus
                  fugiat quisquam dicta.
                </ExpandableText>
              }
              author="John Doe"
              company="Joe Company"
            />
          }
        />
        <Route path="/jobs" element={<Message />} />
        <Route path="/expense-tracker" element={<ExpenseForm />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <ExpandableText>Hello world</ExpandableText> */}
      <Footer groups={footerSections} brandName="Kunzy" />
    </div>
  );
}

export default App;
