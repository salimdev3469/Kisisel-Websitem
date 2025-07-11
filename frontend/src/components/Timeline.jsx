import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '@/assets/main.css';
import API from '../services/api';

function Timeline() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        API.get('/experiences')
            .then(res => {
                const data = Array.isArray(res.data)
                    ? res.data
                    : res.data.data || [];

                setExperiences(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <VerticalTimeline>
            {(Array.isArray(experiences) ? experiences : []).map((exp) => (
                <VerticalTimelineElement
                    key={exp._id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date={`${exp.startDate?.substring(0, 10)} - ${exp.endDate ? exp.endDate.substring(0, 10) : 'Present'}`}
                >
                    <h3 className="vertical-timeline-element-title">{exp.position}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                    <p>{exp.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}

export default Timeline;
