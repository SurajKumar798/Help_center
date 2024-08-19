import React from 'react'
import './ContentPage.css';
import Card from 'react-bootstrap/Card';

function ContentPage({ cardData }) {
  if(cardData === null){
    return(
        <div className='flex justify-center items-center h-full pt-[60px]'>
            <h2>Card is not available</h2>
        </div>
    )
  }
  return (
    <div>
        {cardData && (
        <div className='flex flex-wrap justify-between items-center gap-[50px] pt-[60px] px-56 '>
              <Card style={{ width: '27rem' }}>
                  <Card.Header>{cardData.card_title}</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          {cardData.card_description}
                      </Card.Text>
                  </Card.Body>
              </Card>
              {/* <br />

              <Card style={{ width: '27rem' }}>
                  <Card.Header>Manage your account</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          Configure your account settings, such as
                          your email, profile details, and password.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <br />

              <Card style={{ width: '27rem' }}>
                  <Card.Header>Manage organizations, teams, and projects</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          Use Abstract organizations, teams,
                          and projects to organize your people and your
                          work.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <br />

              <Card style={{ width: '27rem' }}>
                  <Card.Header>Manage billing</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          change subscriptions and payment
                          details.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <br />

              <Card style={{ width: '27rem' }}>
                  <Card.Header>Authenticate to Abstract</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          Set up and configure SSo, SCIM, and
                          Just-in-Time provisioning.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <br />

              <Card style={{ width: '27rem', marginRight: '4rem' }}>
                  <Card.Header>Abstract support</Card.Header>
                  <Card.Body>
                      <Card.Text>
                          Get in touch with a human.
                      </Card.Text>
                  </Card.Body>
              </Card> */}
        </div>
      )}
    </div>
  )
}

export default ContentPage
