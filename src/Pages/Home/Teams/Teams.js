import React, { useEffect, useState } from 'react';
import TeamsCard from '../TeamsCard/TeamsCard';

const Teams = () => {
    
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    
    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-2xl font-bold text-orange-600 '>Team</p>
                <h2 className='text-5xl font-semibold'>Meet Our Team</h2>
                <div className='w-1/2 mx-auto mt-2'>
                    <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.  </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>

                {
                    teams.map(team => <TeamsCard key={team.id} team = {team}></TeamsCard>)
                }

            </div>
        </div>
    );
};

export default Teams;