import React from 'react';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { SkillsIcons } from './components/skills-icons/SkillsIcons';
import { Projects } from './layout/sections/projects/Projects';

function App() {
  return (
		<div className='App'>
			<Header />
			<Main />
			<SkillsIcons />
			<Projects />
		</div>
	)
}

export default App;
