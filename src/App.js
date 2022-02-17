import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import about from './Page/about'
import homepage from './Page/homepage'
import project from './Page/project'
import technology from './Page/technology'

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path={'/'} component={homepage} exact />
      <Route path={'/project'} component={project} />
      <Route path={'/technology'} component={technology} />
      <Route path={'/about'} component={about} />
    </div>
  )
}

export default App