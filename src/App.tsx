import React from 'react';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { SkillsIcons } from './components/skills-icons/SkillsIcons';
import { Projects } from './layout/sections/projects/Projects';
import { About } from './layout/sections/about/About';

function App() {
  return (
		<div className='App'>
			<Header />
			<Main />
			<SkillsIcons />
			<Projects />
			<About />
		</div>
	)
}

export default App;
