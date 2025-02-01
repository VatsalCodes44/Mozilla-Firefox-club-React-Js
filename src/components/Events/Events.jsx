
import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
const cardStyle = {
  width: 750,
};
const imgStyle = {
  display: 'block',
  width: 273,
};
const Home = () => (
  <div className='bg-black my-10 flex justify-center flex-col w-full max-h-max'>
    <div className='flex justify-center'>
    <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://imgs.search.brave.com/Arv_R-L-YS9aUXB226ce5if3iRbW0SCA3Q54Sxcfs6w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMy1o/MnMtdjIuczMuYXAt/c291dGgtMS5hbWF6/b25hd3MuY29tLzIw/MjQtMDgtMzBUMDM6/NTg6MTEuMjk3Wi1o/b21lcGFnZS5BQkMt/bWluLXYyLnBuZw"

        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={3} style={{fontSize:"15px"}}>
            A hackathon is an event where individuals, typically computer programmers, 
             designers, and other tech professionals, collaborate intensively to develop 
             software or hardware projects within a limited timeframe, often 24 to 48 hours.
              The term "hackathon" is a combination of "hack" and "marathon," reflecting the
               intense, prolonged effort involved. These events are designed to foster innovation,
                encourage teamwork, and provide a platform for participants to showcase their skills 
                and creativity.
        </Typography.Title>
        <Button type="primary" href="" target="_blank">
          Know More
        </Button>
      </Flex>
    </Flex>
  </Card>
    </div>
    <div className='flex justify-center my-8'>
        <Card
            hoverable
            style={cardStyle}
            styles={{
              body: {
                padding: 0,
                overflow: 'hidden',
              },
            }}
          >   
                <Flex justify="space-between">
              <img
                alt="avatar"
                src="https://imgs.search.brave.com/COyJ2i4e0aD2BQtVK7M6IInQsOlAJSt0sDnyZfV29TA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85MS84My93/ZWItZGV2ZWxvcG1l/bnQtcHJvbW90aW9u/YWwtdmVjdG9yLTI3/ODI5MTgzLmpwZw"
          
                    style={imgStyle}
              />
              <Flex
                vertical
                align="flex-end"
                justify="space-between"
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={3} style={{fontSize:"15px"}}>
                Web development refers to the process and technology of creating websites and applications 
                 for the Internet or intranet. It involves various tasks such as coding, technical design, 
                 and ensuring the performance of websites. Web development can range from building simple static 
                 pages to complex applications and includes both front-end (client-side) and back-end (server-side) 
                 development. Front-end development focuses on the user interface and user experience, while back-end 
                 development deals with server-side logic and databases.
                </Typography.Title>
                <Button type="primary" href="" target="_blank">
                  Know More
                </Button>
              </Flex>
            </Flex>
      </Card>
    </div>
    <div className='flex justify-center my-8'>
        <Card
            hoverable
            style={cardStyle}
            styles={{
              body: {
                padding: 0,
                overflow: 'hidden',
              },
            }}
          >   
                <Flex justify="space-between">
              <img
                alt="avatar"
                src="https://imgs.search.brave.com/HTGV6ofsS97_0YddjSHOlxu9M-vhfAdzAVbkKMwUqFk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzE4LzE3Lzgy/LzM2MF9GXzkxODE3/ODI1M19Td2NUbTVv/aHdGRGVSaFpCTmxN/a1l2NHZRaDZKYkxa/cy5qcGc"
          
                    style={imgStyle}
              />
              <Flex
                vertical
                align="flex-end"
                justify="space-between"
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={3} style={{fontSize:"15px"}}>
                When you contribute to open source, you are participating in a collaborative 
                effort to develop software or other resources that are made publicly available 
                for anyone to view, modify, and distribute. This process can involve fixing bugs, 
                adding new features, improving documentation, or even translating content into 
                different languages. The contributions you make can help maintain and advance the 
                software you use, while also providing you with valuable experience and a way to give
                 back to the developer community.
                </Typography.Title>
                <Button type="primary" href="" target="_blank">
                  Know More
                </Button>
              </Flex>
            </Flex>
      </Card>
    </div>
    <div className='flex justify-center my-8'>
        <Card
            hoverable
            style={cardStyle}
            styles={{
              body: {
                padding: 0,
                overflow: 'hidden',
              },
            }}
          >   
                <Flex justify="space-between">
              <img
                alt="avatar"
                src="https://imgs.search.brave.com/FOyMJSv1EwrCuR5TI0fAnP-RkCfecu8WE0pGXAczpjY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEtMS5mcmVl/Y29kZWNhbXAub3Jn/L2ltYWdlcy8xKmc1/UkJZZUdlMFZMQjZ0/X1pzdk9fd1EucG5n"
          
                    style={imgStyle}
              />
              <Flex
                vertical
                align="flex-end"
                justify="space-between"
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={3} style={{fontSize:"15px"}}>
                Google Summer of Code (GSoC) is a global, online program that offers post-secondary 
                student developers and beginner contributors the opportunity to work on open-source 
                software projects. Participants, who must be 18 years or older, are paired with mentors 
                from various open-source organizations and work on coding projects for 12+ weeks during 
                the summer. The program aims to introduce new contributors to open-source communities and 
                help them gain valuable real-world experience while contributing to the development of 
                open-source software.
                </Typography.Title>
                <Button type="primary" href="" target="_blank">
                  Know More
                </Button>
              </Flex>
            </Flex>
      </Card>
    </div>
  </div>
);
export default Home;
