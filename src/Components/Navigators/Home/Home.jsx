import React from 'react'
import Homehero from './Homehero';
import Homeabout from './Homeabout';
import Homefeatures from './Homefeatures';
import Homewhatwedo from './Homewhatwedo';
import Homedonate from './Homedonate';
import Hometeam from './Hometeam';
import Hometestimonial from './Hometestimonial';

export default function Home() {
  return (
    <div>
      <Homehero/>
      <Homeabout/>
      <Homefeatures/>
      <Homewhatwedo/>
      <Homedonate/>
      <Hometeam/>
      <Hometestimonial/>
    </div>
  )
}
