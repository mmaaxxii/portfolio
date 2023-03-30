import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import { TimeLineContainer, TimeLineHeader } from './styled-components';

export default function CustomizedTimeline() {
    return (
        <TimeLineContainer>
            <TimeLineHeader>
                <h4><span>.</span>TIMELINE</h4>
            </TimeLineHeader>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        2014
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <ComputerIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >Junior Genexus Developer</h1>
                        <p  >Working for local business</p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                       
                    >
                        2016
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                            Sys engineer
                        </h1>
                        <p >Graduate from UTN-FRT 🇦🇷</p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        
                    >
                        2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <DevicesIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                            Senior Genexus Developer
                        </h1>
                        <p >Certified by Genexus </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <RocketLaunchIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h1 >
                            React Developer
                        </h1>
                        <p >Learning by my own!</p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </TimeLineContainer>

    );
}