import React from 'react';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { About } from './layout/sections/about/About';
import { MainSection } from './layout/sections/MainSection';
import { Services } from './layout/sections/services/Services';

function App() {
  return (
		<div className='App'>
			<MainSection />
			<Projects />
			<About />
			<Services/>
		</div>
	)
}

export default App;
