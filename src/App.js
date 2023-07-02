import React from "react"
import Header from "./components/Header"
import NavigationBar from "./components/NavigationBar"
import ScrollBar from "./components/ScrollBar"
import PageHeader from "./components/PageHeader"
import About from "./components/About"
import TeamMembers from "./components/TeamMembers"
import AboutVideo from "./components/AboutVideo"
import Footer from "./components/Footer"


class App extends React.Component {
  render() {
    return (<div className="name">
    <Header />
    <NavigationBar />
    <PageHeader />
    <About />
    <TeamMembers />
    <AboutVideo />
    <Footer />


  </div>)
  }

  inputClick() {console.log("clicked")}
  mouseOver() {console.log("Mouse over")}
}
export default App