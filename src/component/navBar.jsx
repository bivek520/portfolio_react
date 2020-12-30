import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';

const NavBar = () => {
	return (
		<div className='Nav-bar'>
			<Layout fixedHeader>
				<Header
					title={
						<span>
							<strong>Bivek Shrestha</strong>
						</span>
					}
				>
					<Navigation>
						<Link to='/education'>Education</Link>
						<Link to='/skills'>Skills</Link>
						<Link to='/project'>Project</Link>
						<Link to='/aboutMe'>About Me</Link>
					</Navigation>
				</Header>
				<Drawer title='Bivek Shrestha'>
					<Navigation>
						<Link to='/education'>Education</Link>
						<Link to='/skills'>Skills</Link>
						<Link to='/project'>Project</Link>
						<Link to='/aboutMe'>About Me</Link>
					</Navigation>
				</Drawer>
				<Main />
				<Content />
			</Layout>
		</div>
	);
};

export default NavBar;
