import React from 'react';
import Layout from '../components/Layout/Layout';
import * as classes from '../pageStyles/myService.module.css';
import InfoCard from '../components/InfoCard/InfoCard';
import MyServicePicture from '../images/InfoCard/my_service.jpg';

const myService = () => {
	return (
		<Layout pageName='WHAT IS LIFE COACHING?'>
			<article>
				<p>
					コーチングは、クライアントさんが心から望んでいることを実現し、クライアントさんが決めた行動を最後までやり通せるようにサポートし
					て、人生の質を向上させるための働きかけをしていきます。
				</p>
				<p>
					主に、「問いかけ」を通して、クライアントさんの内側にある気持ち・価値観・潜在的な能力に気づかせ、実際に目標を達成させるための支
					援を行います。
				</p>
				<p>
					コーチングの中で扱うテーマは、特にジャンルの限定はなく、クライアントさんが話したいテーマに対してセッションを行います。
					学業のこと、仕事のこと、人生を豊かにするための秘訣、自分の価値観、家族問題など様々な内容を扱っています。
				</p>
				<p>
					クライアントさんの内側にある価値観をもとに、クライアントさん自身で選択し目標を設定していただくため、自発的で継続的な変化と成長
					を導くことが特徴です。
				</p>
				<div style={{ textAlign: 'center' }}>
					<InfoCard reachStar text={'好きなことや\n やりたいことに\n 気付く'} />
					<InfoCard reachMountainTop text={'挑戦したいことへ\n 歩踏み出すアクション\n を明確化できる'} />
					<InfoCard fireworks text={'「自分の好き」を 仕事にするためのアクションを実行に移せる'} />
				</div>
				<div style={{ marginTop: '100px' }}>
					<img className={classes.MyServiceImg} alt='My Service' src={MyServicePicture} />
				</div>

				<div style={{ marginTop: '50px' }}>
					<h1>MY SERVICE</h1>
					<p>
						コーチングは、<b>「自分らしい人生を生きる未来への投資」</b>とも言われています。
						<br />
						コーチングの価値はセッションだけでなく、セッションを受けた後のあなたの生き方やモチベーションの変化にも現れます。
						<br />
						少しでもコーチングに興味を持ってくださった方、メニューの”CONTACT”からご連絡いただければ幸いです。
					</p>
					<div className={classes.DesktopOnly}>
						<table className={classes.PricesTable}>
							<tbody>
								<tr>
									<td className={classes.Column1}>
										<b>体験セッション</b>
									</td>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>60 分 3,000 円 (学生割 60 分 2,000 円)</b>
											</li>
											<li>初めて私のコーチングを受ける方を対象</li>
											<li>
												コーチングってそもそもどんなものか気軽に体験していただければ嬉しいです。
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td className={classes.Column1}>
										<b>導入セッション</b>
									</td>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>90 分 5,000 円 (学生割 90 分 4,000 円)</b>
											</li>
											<li>
												{' '}
												コーチングを始める前に、クライアントのゴールや価値観を明確化するセッションです
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td className={classes.Column1}>
										<b>コーチングセッション</b>
										<br />
										単発
									</td>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>60 分 5,000 円 (学生割 60 分 4,000 円)</b>
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td className={classes.Column1}>
										<b>コーチングセッション</b>
										<br />3 回コース
									</td>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>12,000 円/3 セッション (1 セッション 4,000 円) </b>
											</li>
											<li>
												期間や頻度は柔軟に対応させて頂きます。月に 1
												回でご利用いただく方が多いです
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={classes.MobileOnly}>
						<table className={classes.PricesTable}>
							<tbody>
								<tr>
									<td className={classes.Column1}>
										<b>体験セッション</b>
									</td>
								</tr>
								<tr>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>60 分 3,000 円 (学生割 60 分 2,000 円)</b>
											</li>
											<li>初めて私のコーチングを受ける方を対象</li>
											<li>
												コーチングってそもそもどんなものか気軽に体験していただければ嬉しいです。
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>

						<table className={classes.PricesTable}>
							<tbody>
								<tr>
									<td className={classes.Column1}>
										<b>体験セッション</b>
									</td>
								</tr>
								<tr>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>90 分 5,000 円 (学生割 90 分 4,000 円)</b>
											</li>
											<li>
												{' '}
												コーチングを始める前に、クライアントのゴールや価値観を明確化するセッションです
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>

						<table className={classes.PricesTable}>
							<tbody>
								<tr>
									<td className={classes.Column1}>
										<b>コーチングセッション</b>
										<br />
										単発
									</td>
								</tr>
								<tr>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>60 分 5,000 円 (学生割 60 分 4,000 円)</b>
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
						<table className={classes.PricesTable}>
							<tbody>
								<tr>
									<td className={classes.Column1}>
										<b>コーチングセッション</b>
										<br />3 回コース
									</td>
								</tr>
								<tr>
									<td className={classes.Column2}>
										<ul>
											<li>
												<b>12,000 円/3 セッション (1 セッション 4,000 円) </b>
											</li>
											<li>
												期間や頻度は柔軟に対応させて頂きます。月に 1
												回でご利用いただく方が多いです
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export default myService;
