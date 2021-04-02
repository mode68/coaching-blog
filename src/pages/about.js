import React from 'react';
import Layout from '../components/Layout/Layout';
import mainPicture from '../images/about_img.jpg';
import * as classes from '../pageStyles/about.module.css';

const about = () => (
	<Layout pageName='ABOUT'>
		<article>
			<div className={classes.MainPicture}>
				<img src={mainPicture} alt='MainAboutPicture' />
				<div className={classes.PictureFooter}>
					Picture footer: he looks very wise in this picture, looking into the distance
				</div>
			</div>
			<div className={classes.Content}>
				<p>Look at this cute doggie, so cute.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum sapien nisi, eu
					rhoncus eros porttitor sit amet. Integer sed tristique ante, ut lobortis ante. Maecenas accumsan
					convallis nunc, eu porta orci vestibulum non. Phasellus a laoreet ipsum. Sed interdum libero id
					sapien iaculis gravida. Praesent egestas accumsan erat, vitae efficitur sem dignissim vel. Donec
					iaculis urna eu enim ultricies luctus. Vivamus nec nibh vel massa mattis vehicula tristique et
					neque. Fusce semper mi at porttitor faucibus. Duis fermentum justo sed ultrices tincidunt. Sed
					tincidunt eu nibh sed congue. Fusce egestas tincidunt tempus. Nunc non rhoncus mi. Vivamus volutpat
					mattis ante, eu venenatis dui condimentum at. Aenean eget mi mauris. Pellentesque nec odio elit.
					Nulla eu vestibulum turpis. Nulla hendrerit congue aliquam. Mauris convallis ultrices ipsum, in
					vulputate ante. Maecenas fringilla elit ac diam feugiat, sit amet pharetra elit tempus. Vestibulum
					convallis elit in interdum ornare. Integer sit amet nunc nec justo lacinia hendrerit et quis libero.
					Vestibulum vitae dignissim elit. Ut lobortis odio id elementum iaculis. Aliquam vehicula, nisi eu
					convallis placerat, ipsum ex finibus tortor, ut ultrices libero tellus ut purus. Etiam id pulvinar
					sapien, eu faucibus mauris.
				</p>
				<p>
					Vestibulum venenatis nisl ut nunc pellentesque, vel efficitur ligula tincidunt. Aliquam erat
					volutpat. Aliquam auctor neque in lacus laoreet aliquet. Suspendisse potenti. Maecenas bibendum nisl
					tortor, a malesuada dolor laoreet sit amet. Aliquam nisl neque, fringilla in quam ac, tristique
					varius felis. Aliquam erat volutpat. In ut eros sem. Praesent et auctor arcu. Praesent imperdiet ex
					quis nulla hendrerit, eget venenatis est sodales. Donec pharetra vestibulum urna non elementum.
					Etiam lorem eros, porttitor vel turpis nec, feugiat dapibus nisl. Aliquam elementum mi non lectus
					finibus, ac ultricies eros hendrerit. Morbi vulputate tellus elit, nec tincidunt velit pellentesque
					vitae. Donec ullamcorper, enim vel eleifend tincidunt, risus diam condimentum orci, a lacinia tortor
					libero et leo. Vivamus sodales imperdiet orci, ultrices aliquet metus mattis vitae. Aenean semper
					sem non dolor ornare aliquet a sed elit. Mauris velit dolor, sodales a sagittis vitae, rhoncus ut
					diam. Vivamus laoreet mauris aliquet est porttitor, quis faucibus purus dignissim. Praesent sit amet
					ante odio. Phasellus leo urna, lacinia ut egestas ut, lobortis vitae velit. Phasellus at est at nisi
					fringilla molestie in sed eros.
				</p>
			</div>
		</article>
	</Layout>
);

export default about;
