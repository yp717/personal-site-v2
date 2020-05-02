import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimelineComponent = () => {
    return (
        <>
        <Timeline lineColor={'#F64755'}>
        <TimelineItem
            key="001"
            dateText="10/2017 – Present"
            dateInnerStyle={{ background: '#F64755', color: '#FFFFFF' }}
            bodyContainerStyle={{
            background: '#F64755',
            padding: '20px',
            borderRadius: '8px',
            // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h2 style={{color: 'white', fontSize: '1.5em'}}>MEng Electrical & Electrical Engineering</h2>
            <h3 style={{color: 'white'}}>Imperial College London</h3>
            <p style={{color: 'white'}}>First Year Result 2:1 <br/> Second Year Result 2:1 <br/> Predicted 2:1 or Higher</p>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="06/2018 – 08/2018"
            dateInnerStyle={{ background: '#F64755', color: '#FFFFFF' }}
            bodyContainerStyle={{
            background: '#F64755',
            padding: '20px',
            borderRadius: '8px',
            // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h2 style={{color: 'white', fontSize: '1.5em'}}>Stanford University Summer Exchange</h2>
            <h3 style={{color: 'white'}}>Stanford University</h3>
            <p style={{color: 'white'}}>4.0 GPA with A in Data Science 101, A Programming Methodology</p>
        </TimelineItem>
        <TimelineItem
            key="003"
            dateText="06/2018 – 08/2018"
            dateInnerStyle={{ background: '#F64755', color: '#FFFFFF' }}
            bodyContainerStyle={{
            background: '#F64755',
            padding: '20px',
            borderRadius: '8px',
            // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h2 style={{color: 'white', fontSize: '1.5em'}}>A-Levels</h2>
            <h3 style={{color: 'white'}}>British School of Bahrain</h3>
            <p style={{color: 'white'}}>Mathematics A* <br/> Further Mathematics A* <br/> Physics A <br/> English Literature A</p>
        </TimelineItem>
        </Timeline>
        </>
    );
};

export default TimelineComponent;