import React from "react"
import { StaticQuery, graphql } from "gatsby"
import board1 from "../images/boardMembers/boardheidi2.jpg"
import board2 from "../images/boardMembers/President_boarstara.jpg"
import board3 from "../images/boardMembers/boardsue.jpg"
const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiArticle {
          edges {
            node {
              id
              Name
              Board
              description
            }
          }
        }
      }
    `}
    render={data=><div class="wrapper">
    {data.allStrapiArticle.edges.map((document,index) => (
      <div class="card">
         <img src={index==0?board1:(index==1?board2:board3)}/>
          <div class="info">  
          <div>
            <h1>{document.node.Name}, {document.node.Board}</h1>
            <p>{document.node.description}</p>
            <button>Read More</button>
            </div>
        </div>
      </div>
    ))} 
    </div>}
  ></StaticQuery>
)



export default ComponentName