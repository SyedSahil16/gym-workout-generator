import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExcerciseCard from './ExcerciseCard';

export default function Workout(props) {
    const { workout } = props;
    return (
        <SectionWrapper id={'workout'} header={"welcome"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {Object.entries(workout).map(([muscleGroup, excercise], i) => (
                    <ExcerciseCard 
                        key={i} 
                        i={i} 
                        excercise={excercise} 
                        muscleGroup={muscleGroup}  // Pass muscle group name here
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
