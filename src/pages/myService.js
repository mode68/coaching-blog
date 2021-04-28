import React from 'react';
import Layout from '../components/Layout/Layout';
import * as classes from '../pageStyles/myService.module.css';
import InfoCard from '../components/InfoCard/InfoCard';
import MyServicePicture from '../images/InfoCard/my_service.jpg';

const myService = () => {
	const infoCardText1 = '好きなことや やりたいことに 気付く';
	const infoCardText2 = '挑戦したいことへ 一歩踏み出すアクション を明確化できる';
	const infoCardText3 = '「自分の好き」を 仕事にするためのアクションを実行に移せる';
	return (
		<Layout pageName='WHAT IS LIFE COACHING?'>
			<article>
				<p>
					コーチングでは、「問いかけ」を通して、クライアントさんの内側にある気持ち・価値観・潜在的な能力に気づかせ、実際に目標を達成させるための支援を行います。
				</p>
				<p>
					クライアントさんの内側にある価値観をもとに、クライアントさん自身で選択し目標を設定していただくため、自発的で継続的な変化と成長を導くことが特徴です。
				</p>
				<div style={{ textAlign: 'center' }}>
					<InfoCard heartGlass text={infoCardText1} />
					<InfoCard medal text={infoCardText2} />
					<InfoCard peace text={infoCardText3} />
				</div>
				<div style={{ marginTop: '100px' }}>
					<img className={classes.MyServiceImg} alt='My Service' src={MyServicePicture} />
				</div>

				<div style={{ marginTop: '50px' }}>
					<h1>MY SERVICE</h1>
					<table className={classes.PricesTable}>
						<tbody>
							<tr>
								<td className={classes.Column1}>
									<b>体験セッション</b>
								</td>
								<td className={classes.Column2}>
									<ul>
										<li>
											<b>60 分 2,000 円 (学生割 60 分 1500 円)</b>
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
											<b>90 分 5,000 円 (学生割 90 分 4000 円)</b>
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
											<b>60 分 5,000 円 (学生割 60 分 4000 円)</b>
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
											<b>12,000 円/3 セッション (1 セッション 4000 円) </b>
										</li>
										<li>
											期間や頻度は柔軟に対応させて頂きます。月に 1 回でご利用いただく方が多いです
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>
		</Layout>
	);
};

export default myService;
