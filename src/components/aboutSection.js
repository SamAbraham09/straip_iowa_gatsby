import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import mission from '../images/mission.jpg'
import vision1 from '../images/vision1.jpg'
import vision2 from '../images/vision2.jpg'
import vision3 from '../images/vision3.jpg'

const FeaturesPage = () => {
  return (
    <MDBContainer tag="section" className="text-center my-5">
      {/* <div class="grid-container">
                <div class="grid-item">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Mission
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        As a Registry of Interpreters for the Deaf, Inc. (RID) affiliate chapter, our mission is to initiate, sponsor, promote, and execute policies and activities that will further the profession of interpreters of American Sign Language and transliterators of English.
                    </p>
                </div>
                <div class="grid-item">
                    
                    <img src={mission} className="mission" />  
                </div>  
            </div>




            <h2 className="h1-responsive font-weight-bold my-5">
            Vision
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                
                <div class="grid-container">
                    <div class="grid-item">
                        <ul style={{padding: '0'}}>
                            <li>To maintain and promote the NAD-RID Code of Professional Conduct for interpreters and transliterators.</li>
                            <li>To encourage and promote training opportunities for interpreters and transliterators through continuing education seminars and workshops in cooperation with existing interpreter training programs.</li>
                            <li>To support and promote the National Testing System's certification and testing policies and procedures.</li>
                            <li>To maintain and distribute a membership directory to ISRID members.</li>
                            <li>To provide the public with information about interpreting and transliterating.</li>
                            <li>To advocate for legislation of benefit to interpreters and transliterators.</li>
                            <li>To prepare and distribute information regarding interpreting and transliterating issues both statewide and nationally.</li>
                            <li>To support the activities of organizations: of and for deaf persons, and of and for interpreters, transliterators and translators, insofar as such activities are not in conflict with the purpose of this organization.</li>
                            <li>To raise funds to support the purposes and activities of this organization.</li>
                        </ul>
                    </div>
                   
                </div>
            </p>
             */}

      <div className="two-col-timeline">
        <div className="two-col-timeline__row">
          <div className="two-col-timeline__col-text">
            <div className="two-col-timeline__col-text-inner slide-in">
              <div className="two-col-timeline__text-wrapper">
                <h4
                  className="two-col-timeline__col-title"
                  style={{
                    fontWeight: 600,
                    textAlign: 'left',
                    fontSize: 40,
                    color: 'teal',
                  }}
                >
                  Mission
                </h4>
                <p
                  className="two-col-timeline__col-supporting-text"
                  style={{ textAlign: 'justify' }}
                >
                  As a Registry of Interpreters for the Deaf, Inc. (RID)
                  affiliate chapter, our mission is to initiate, sponsor,
                  promote, and execute policies and activities that will further
                  the profession of interpreters of American Sign Language and
                  transliterators of English.
                </p>
              </div>
            </div>
            <div className="two-col-timeline__dash" />
          </div>
          <div className="two-col-timeline__line" />
          <div className="two-col-timeline__col-image slide-in">
            <img
              src={mission}
              alt="design-timeline-step1"
              className="loading"
              data-was-processed="true"
            />
          </div>
        </div>
        <div className="two-col-timeline__row">
          <div className="two-col-timeline__col-text">
            <div className="two-col-timeline__col-text-inner slide-in">
              <div className="two-col-timeline__text-wrapper">
                <h4
                  className="two-col-timeline__col-title"
                  style={{
                    fontWeight: 600,
                    textAlign: 'justify',
                    fontSize: 40,
                    color: 'teal',
                  }}
                >
                  Vision
                </h4>
                <p className="two-col-timeline__col-supporting-text">
                  <ul style={{ padding: '0' }}>
                    <li
                      style={{
                        fontSize: 18,
                        marginBottom: 10,
                        marginRight: 0,
                        textAlign: 'justify',
                      }}
                    >
                      To maintain and promote the NAD-RID Code of Professional
                      Conduct for interpreters and transliterators.
                    </li>
                    <li
                      style={{
                        fontSize: 18,
                        marginBottom: 10,
                        marginRight: 0,
                        textAlign: 'justify',
                      }}
                    >
                      To encourage and promote training opportunities for
                      interpreters and transliterators through continuing
                      education seminars and workshops in cooperation with
                      existing interpreter training programs.
                    </li>
                    <li
                      style={{
                        fontSize: 18,
                        marginBottom: 10,
                        marginRight: 0,
                        textAlign: 'justify',
                      }}
                    >
                      To support and promote the National Testing System's
                      certification and testing policies and procedures.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="two-col-timeline__dash" />
          </div>
          <div className="two-col-timeline__line" />
          <div className="two-col-timeline__col-image slide-in">
            <img
              src={vision1}
              alt="design-timeline-step2"
              className="loading"
              data-was-processed="true"
            />
          </div>
        </div>

        <>
          <div className="two-col-timeline__row">
            <div className="two-col-timeline__col-text">
              <div className="two-col-timeline__col-text-inner slide-in">
                <div className="two-col-timeline__text-wrapper">
                  <p className="two-col-timeline__col-supporting-text">
                    <ul style={{ padding: '0' }}>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To maintain and distribute a membership directory to
                        ISRID members.
                      </li>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To provide the public with information about
                        interpreting and transliterating.
                      </li>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To advocate for legislation of benefit to interpreters
                        and transliterators.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="two-col-timeline__dash" />
            </div>
            <div className="two-col-timeline__line" />
            <div className="two-col-timeline__col-image slide-in">
              <img
                src={vision2}
                alt="design-timeline-step3"
                className="loading"
                data-was-processed="true"
              />
            </div>
          </div>
          <div className="two-col-timeline__row">
            <div className="two-col-timeline__col-text">
              <div className="two-col-timeline__col-text-inner slide-in">
                <div className="two-col-timeline__text-wrapper">
                  <p className="two-col-timeline__col-supporting-text">
                    <ul style={{ padding: '0' }}>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To prepare and distribute information regarding
                        interpreting and transliterating issues both statewide
                        and nationally.
                      </li>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To support the activities of organizations: of and for
                        deaf persons, and of and for interpreters,
                        transliterators and translators, insofar as such
                        activities are not in conflict with the purpose of this
                        organization.
                      </li>
                      <li
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          marginRight: 0,
                          textAlign: 'justify',
                        }}
                      >
                        To raise funds to support the purposes and activities of
                        this organization.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="two-col-timeline__dash" />
            </div>
            <div className="two-col-timeline__line" />
            <div className="two-col-timeline__col-image slide-in">
              <img
                src={vision3}
                alt="design-timeline-step4"
                className="loading"
                data-was-processed="true"
              />
            </div>
          </div>
        </>
      </div>
    </MDBContainer>
  )
}

export default FeaturesPage
