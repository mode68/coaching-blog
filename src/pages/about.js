import React from 'react';
import Layout from '../components/Layout/Layout';
import mainPicture from '../images/nano_about.jpg';
import secondaryPicture from '../images/nano_about_2.jpg';
import visionPicture from '../images/about_vision.jpg';
import * as classes from '../pageStyles/about.module.css';
import InfoCard from '../components/InfoCard/InfoCard';
import { IntersectionObserver } from '../components/UI/IntersectionObserver/IntersectionObserver';
import { AnimationContainer } from '../components/UI/Animation/AnimationContainer';

const About = () => {
	return (
		<Layout pageName='ABOUT'>
			<article className={classes.Article}>
				<div>
					<IntersectionObserver triggerOnce>
						<AnimationContainer scale>
							<div className={classes.MainPicture}>
								<img src={mainPicture} alt='MainAboutPicture' />
							</div>
						</AnimationContainer>
					</IntersectionObserver>

					<div className={classes.Content}>
						<b style={{ fontSize: '30px', textAlign: 'center' }}>
							<div style={{ display: 'inline-block', width: '100%', textIndent: '-30%' }}>
								あなたの人生に、
							</div>
							<br />
							<div style={{ display: 'inline-block', width: '100%', margin: '20px 0 30px 0' }}>
								夢中になれるか
							</div>
						</b>
						<br />
						「私は、人生でこれをやりたい！」と、声を大にして言える人はどのくらいいるでしょうか？
						<br />
						<br />
						あなたのオリジナルな人生を歩んでいますか？
						<br />
						<br />
						本当に「やりたい事」に夢中になっているでしょうか？
						<br />
						<br />
						<br />
						<div style={{ margin: 0, fontSize: '20px' }}>
							もっと自分らしく生きたい、あんな風になりたい。
							<br />
							<br />
							変化を望むあなたの挑戦を伴走しながら支え続けます。
						</div>
					</div>
				</div>
				<IntersectionObserver triggerOnce threshold={0.5}>
					<AnimationContainer slideInFromLeft>
						<div className={classes.Vision}>
							<h1>MY VISION</h1>
							<div style={{ backgroundImage: `url(${visionPicture})` }}>
								<div
									style={{
										marginTop: '80px',
										display: 'inline-block',
										border: 'solid 1px white',
										padding: '5%',
										color: 'white',
									}}
								>
									<div style={{ margin: 0 }}>
										「出来ることも、出来ないこともある自分自身」
										<br />
										をまるっと愛し、
										<br />
										自分だけのオリジナルな道を歩める人を増やしたい。
									</div>
								</div>
							</div>
						</div>
					</AnimationContainer>
				</IntersectionObserver>

				<div style={{ width: '100%', display: 'inline-block' }}>
					<h1>FOR YOU</h1>
					そのためのサポートとして、コーチングを以下の方へ提供しています。
					<br /> 詳細はメニューの”MY SERVICE”をご覧下さい。
					<div style={{ textAlign: 'center' }}>
						<IntersectionObserver triggerOnce threshold={0.3}>
							<AnimationContainer scale staggerChildren={0.5} childStyle={{ display: 'inline-block' }}>
								<InfoCard reachStar text={'好きなことや\nやりたいことが\n見つからない'} />
								<InfoCard reachMountainTop text={'挑戦したいことが\nあるけど、\n 一歩踏み出せない'} />
								<InfoCard fireworks text={'「自分の好き」を仕事にしたい '} />
							</AnimationContainer>
						</IntersectionObserver>
					</div>
					自分が心から望む、「本当にやりたい事」を見つけ一歩踏み出すことで、人生を変化させませんか？
				</div>

				<div style={{ width: '100%', display: 'inline-block' }}>
					<h1>
						INTRODUCTION <br />
						平野なな子 / Nanako Hirano
					</h1>
					<IntersectionObserver triggerOnce threshold={0.2}>
						<AnimationContainer scale staggerChildren={0.5}>
							<div className={classes.SecondaryPicture}>
								<img
									src={secondaryPicture}
									alt='SecondaryAboutPicture'
									style={{ width: '100%', margin: '0 10px 0 10px' }}
								/>
							</div>
							<span>
								コンサルティング会社で働きながら、対個人に対してコーチングを実施しています。
								<br />
								クライアントは学生から、会社員まで様々な方がいらっしゃいます。
								<br />
								（セッション実績６０時間以上）
								<ul>
									<li>CTI Japan 基礎コース修了</li>
									<li>CTI Japan 応用コース修了</li>
								</ul>
								学生時代にオーストラリアへ留学をしたことをきっかけに、「自分オリジナルな人生
								を楽しむ」人たちに沢山出会いました。
							</span>
							<p>
								みんなが考える「良い人生レール」を歩まずに、「オリジナルな人生レール」を歩む
								人たちは、本当にイキイキとしていました。
							</p>
							<p>
								私自身、コロナ禍で自分自身と向き合う時間が増え、
								「本当に自分自身が幸せな人生」について悩み、「自分の好きなこと」を探してきました。
							</p>
							<p>
								自己分析したり、色々なことに挑戦してみたり、、、
								<br />
								ただ、いくら自分で探しても「自分の好きなこと」は見つかりませんでした。
							</p>
							<p>
								そんな中で出会ったのがコーチングです。
								<br />
								コーチとの対話の中で、「自分が好きなこと」は探すものではなく、既に自分の中にあるものだと気づくことが出来ました。
							</p>
							<p>
								そんな私の「好きなこと」である
								<b>
									<u>誰かの挑戦・変化に伴奏すること、</u>
								</b>
								コーチングを通して実現させて下さい。
							</p>
						</AnimationContainer>
					</IntersectionObserver>
				</div>
				<div>
					<h1>BACKGROUND</h1>
					<ul>
						<IntersectionObserver triggerOnce threshold={0.3}>
							<AnimationContainer scale staggerChildren={0.5}>
								<li>
									外資系コンサルティング会社に新卒で入社。(2018/8/1〜現在)
									<br />
									金融業界のグローバルプロジェクトを中心に業務変革・システム構築支援まで様々な企業のプロジェクトに従事。
								</li>
								<li>
									英会話教師 (2018/12/1～現在)
									<br />
									本業の傍ら、英会話教師として英語を話したい人をサポート。「純ジャパでも、英語は話せるようになる！」をモットーに英語を話せる人達と共に伴走中。
								</li>
							</AnimationContainer>
						</IntersectionObserver>
					</ul>
				</div>
			</article>
		</Layout>
	);
};

export default About;
