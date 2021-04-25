import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, PanelHeader, AdaptivityProvider, AppRoot, Panel, withAdaptivity, Div, Avatar, Title, Group, Header, ContentCard, CardGrid, Card, SimpleCell, Text } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons';
import logo from './img/logo.png';
import E from './img/E.jpg';
import M from "./img/M.jpg"
import "./App.css";
import { Icon36LogoVk } from '@vkontakte/icons';

const App = ({ }) => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);


	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>

					<Panel id="home">
						<Group header={<Header>О нас</Header>}>
							<main className="about">
								<div className="about__title">
									<Title level="1" weight="bold" style={{ marginBottom: 40 }}>Команда SMEh</Title>
									<img className="about__logo" src={logo} />
								</div>
								<div className="about__content">
									<Text weight="regular" style={{ marginBottom: 16 }}>
										Мы - команда разработчиков из Рязани. <br /> Занимаемся веб-разработкой,
										android-разработкой и дизайном. <br />Любим хакатоны, особенно от ВКонтакте. :)
									</Text>
								</div>
							</main>
						</Group>

						<Group header={<Header>Команда</Header>}>
							<div className="team">
								<CardGrid className="t" size={window.innerWidth <= 500 ? "l": "s"}>
									<Card className="team__item">
										<div className="team__avatar">
											<Avatar size={120} src="https://sun1-20.userapi.com/s/v1/if2/aXTFQT5PQ5stRrImwrlOWamxItD39UFctLDrz90cDxP9p9IztwuLBHrWGCgsFjCSiW5F-W0gXtdkbbcnjJa8hLto.jpg?size=50x0&quality=96&crop=66,1,200,200&ava=1" />
										</div>
										<div className="team__name">
											<Title level="1" weight="bold" style={{ marginBottom: 40 }}>Семен Головин</Title>
										</div>
										<div className="team__content">
											<Text weight="regular" style={{ marginBottom: 16 }}>
												Fullstack-разработчик, android-разработчик
											</Text>
											<Text weight="regular" style={{ marginBottom: 16 }}>
												semgose@gmail.com
											</Text>
										</div>
										<nav className="team__nav">
											<a className="team__link" href="https://vk.com/semgose">
												<Icon36LogoVk/>
												<span className="team__link-text">Перейти</span>
											</a>
										</nav> 
										<div style={{ paddingBottom: '10%' }} />
									</Card>
									<Card className="team__item">
									<div className="team__avatar">
											<Avatar size={120} src={E} />
										</div>
										<div className="team__name">
											<Title level="1" weight="bold" style={{ marginBottom: 40 }}>Егор Романов</Title>
										</div>
										<div className="team__content">
											<Text weight="regular" style={{ marginBottom: 16 }}>
												Frontend-разработчик, веб-дизайнер
											</Text>
											<Text weight="regular" style={{ marginBottom: 16 }}>
												egortilda@gmail.com
											</Text>
										</div>
										<nav className="team__nav">
											<a className="team__link" href="https://vk.com/egor_romanov2003">
												<Icon36LogoVk/>
												<span className="team__link-text">Перейти</span>
											</a>
										</nav> 
										<div style={{ paddingBottom: '10%' }} />
									</Card>
									<Card className="team__item">
									<div className="team__avatar">
											<Avatar size={120} src={M} />
										</div>
										<div className="team__name">
											<Title level="1" weight="bold" style={{ marginBottom: 40 }}>Михаил Саввин</Title>
										</div>
										<div className="team__content">
											<Text weight="regular" style={{ marginBottom: 16 }}>
												Frontend-разработчик, android-разработчик
											</Text>
											<Text weight="regular" style={{ marginBottom: 16 }}>
												mihago04@gmail.com
											</Text>
										</div>
										<nav className="team__nav">
											<a className="team__link" href="https://vk.com/semgose">
												<Icon36LogoVk/>
												<span className="team__link-text">Перейти</span>
											</a>
										</nav> 
										<div style={{ paddingBottom: '10%' }} />
									</Card>
								</CardGrid>
							</div>
						</Group>

					</Panel>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default (App);
