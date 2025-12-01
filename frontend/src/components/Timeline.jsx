import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@mui/material/styles';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import API from '../services/api';

function Timeline() {
    // Başlangıç değeri mutlaka boş array olmalı
    const [experiences, setExperiences] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        API.get('/experiences')
            .then(res => {
                // Gelen veri Array mi diye kontrol et, değilse boş dizi ata
                const data = Array.isArray(res.data) ? res.data : (res.data?.data || []);
                setExperiences(Array.isArray(data) ? data : []);
            })
            .catch(err => {
                console.error("Timeline Hatası:", err);
                setExperiences([]); // Hata durumunda güvenli moda geç
            });
    }, []);

    // Eğer deneyim yoksa veya yüklenemediyse kullanıcıya bir şey gösterme (veya yükleniyor göster)
    if (experiences.length === 0) {
        return <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>Deneyim bilgisi yüklenemedi veya henüz eklenmedi.</div>;
    }

    return (
        <div style={{ padding: '20px 0' }}>
            <VerticalTimeline lineColor={'rgba(255,255,255,0.1)'}>
                {experiences.map((exp) => (
                    <VerticalTimelineElement
                        key={exp._id || Math.random()} // ID yoksa hata vermesin diye random key
                        contentStyle={{
                            background: 'rgba(17, 24, 39, 0.6)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            color: '#fff',
                            boxShadow: 'none'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.6)' }}
                        date={exp.startDate ? exp.startDate.substring(0, 4) : ''}
                        iconStyle={{ background: '#0F172A', color: '#3B82F6', border: '2px solid #3B82F6' }}
                        icon={<WorkOutlineIcon />}
                    >
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{exp.position}</h3>
                        <h4 style={{ color: '#94A3B8', marginTop: '4px' }}>{exp.company}</h4>
                        <p style={{ color: '#CBD5E1', fontWeight: 300 }}>{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;