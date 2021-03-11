import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/mask'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import AboutSection from '../components/aboutSection'
import { MDBRow } from 'mdbreact'
import Board from "../components/board";
import Board1 from "../components/board1";
import Board2 from "../components/board2";
import Page2 from "./page2";
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="IOWA"
            keywords={[
              `gatsby`,
              `MDBReact`,
              `react`,
              `Material Design For Bootstrap`,
            ]}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://www.bluleadz.com/hs-fs/hub/57042/hub_generated/module_assets/29497713864/1589986639805/module_29497713864_2020_-_Two_Col_Timeline.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://www.bluleadz.com/hs-fs/hub/57042/hub_generated/template_assets/29064077784/1598541453890/bz-bluleadz-2018/CSS/bz-2020-main.min.css"
          ></link>
          <Carousel />
          <Intro />
          <main>
            <AboutSection />
            <section id="cardSection">
              <h2 className="h1-responsive text-center font-weight-bold mb-5">
                Meet the Board
              </h2>
              {/* <MDBRow className="m-0 rowMargin" center>
                <Card />
                <Card />
                <Card />
              </MDBRow>
              <MDBRow className="m-0" center>
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
              </MDBRow> */}
              <MDBRow className="m-0 rowMargin" center>
                {/* <Board  style={{marginTop:20}}/>
                <Board1 style={{marginTop:20}}/>
                <Board2 style={{marginTop:20}}/> */}
                 <Page2/> 
              </MDBRow>
            </section>
          </main>
        </Layout>
      </>
    )
  }
}

export default App
