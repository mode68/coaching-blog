import React from 'react';
import Layout from '../components/Layout/Layout';
import mainPicture from '../images/nano_about.jpg';
import secondaryPicture from '../images/nano_about_2.jpg';
import visionPicture from '../images/flowers_vision_about.jpg';
import * as classes from '../pageStyles/about.module.css';
import InfoCard from '../components/InfoCard/InfoCard';

const about = () => (
	<Layout pageName='ABOUT'>
		<article className={classes.Article}>
			<div>
				<div className={classes.MainPicture}>
					<img src={mainPicture} alt='MainAboutPicture' />
					{/* <div className={classes.PictureFooter}>
					Picture footer: it looks like she loves eggs, and it's true. She will love you if you're an onsen
					egg or cod roe
				</div> */}
				</div>
				<div className={classes.Content}>
					<b style={{ fontSize: '30px', textAlign: 'center' }}>
						<div style={{ display: 'inline-block', width: '100%', textIndent: '-40%' }}>
							あなたの人生に、
						</div>
						<br />
						<div style={{ display: 'inline-block', width: '100%', margin: '20px 0 30px 0' }}>
							夢中になれるか
						</div>
					</b>
					<br />
					「私は、人生でこれをやりたい！」と、声を大に言える人はどのくらいいるでしょうか？
					<br />
					あなたのオリジナルな人生を歩んでいますか？
					<br />
					本当に「やりたい事」に夢中になっているでしょうか？
					<br />
					<br />
					<div style={{ margin: 0, fontSize: '20px' }}>
						あなただけのオリジナルな人生設計をサポートします。
					</div>
				</div>
			</div>
			<div className={classes.Vision}>
				<div style={{ backgroundImage: `url(${visionPicture})` }}>
					<div style={{ marginTop: '80px', display: 'inline-block' }}>
						<h2 style={{ margin: 0 }}>Vision</h2>
						<div style={{ margin: 0 }}>
							「出来ることも、出来ないこともある自分自身
							<br />
							をまるっと愛し、
							<br />
							自分だけのオリジナルな道を歩める人を増やしたい。
						</div>
					</div>
				</div>
			</div>

			<div style={{ width: '100%', display: 'inline-block' }}>
				<h1>FOR YOU</h1>
				そのためのサポートとして、コーチングを以下の方へ提供しています。 詳細はメニューの”MY
				SERVICE”をご覧下さい。
				<div style={{ textAlign: 'center' }}>
					<InfoCard heartGlass text='好きなことや やりたいことが 見つからない' />
					<InfoCard medal text='挑戦したいことがあるけど、 一歩踏み出せない' />
					<InfoCard peace text='「自分の好き」を 仕事にしたい ' />
				</div>
				自分が心から望む、「本当にやりたい事」を見つけ一歩踏み出すことで、人生を変化させませんか？
			</div>

			<div style={{ width: '100%', display: 'inline-block' }}>
				<div className={classes.SecondaryPicture}>
					<img
						src={secondaryPicture}
						alt='SecondaryAboutPicture'
						style={{ width: '100%', margin: '0 10px 0 10px' }}
					/>
				</div>
				<h1>INTRODUCTION 平野なな子 / Nanako Hirano</h1>
				コンサルティング会社で働きながら、対個人に対してライフコーチングを実施しています。
				クライアントは学生から、会社員まで様々な方がいらっしゃいます。（セッション実績６０時間以上）
				<ul>
					<li>CTI Japan 基礎コース修了</li>
					<li>CTI Japan 応用コース修了</li>
				</ul>
				私自身、コロナ禍で自分自身と向き合う時間が増え、「自分の好きなことを仕事にしたい！」と就活以来の自己分析を始めました。ただ、いくら自己分析をしても、「自分のすきなこと」は見つかりませんでした。
				そんな中で出会ったのがライフコーチングです。
				コーチとの対話の中で、「自分が好きなこと」は既に自分の中にあったということに気づくことが出来ました。
				そんな私の「好きなこと」である誰かの挑戦・変化に伴奏すること、コーチングを通して実現させて下さい。
			</div>
			<div>
				<h1>BACKGROUND</h1>
				<ul>
					<li>
						外資系コンサルティング会社に新卒で入社。(2018/8/1〜現在)
						金融業界のグローバルプロジェクトを中心に業務変革・システム構築・変革実行支援まで、全社的なトランスフォーメーション、グローバルプロジェクトに従事。
					</li>
					<li>
						英会話教師 (2018/12/1～現在)
						本業の傍ら、英会話教師として英語を話したい人をサポート。「留学しなくても、英語は話せる！」をモットーに英語を話せる人を量産中。
					</li>
				</ul>
			</div>
		</article>
	</Layout>
);

export default about;
