import { Navigation } from '../Navigation/Navigation';
import { AboutHeader } from '../AboutHeader/AboutHeader';
import s from './About.module.scss';
import Hawaiian from '../../assets/images/HAWAIIAN.png';
import Pepperoni from '../../assets/images/pepperoni.png';
import Tasty from '../../assets/images/tastycheese.png';
import KFC from '../../assets/images/kfc.png';
import Flaeskestegssandwich from '../../assets/images/flaeskestegssandwich.png';
import Ketchuppizza from '../../assets/images/ketchuppizza.png';
import Redonion from '../../assets/images/redonion.png';
import Crocodile from '../../assets/images/crocodile.png';
import Mozzarella from '../../assets/images/mozzarellasticks.png';
import Sushi from '../../assets/images/sushi.png';

export const About = () => {

    return (
        <>
            <AboutHeader />
            <Navigation />
            <main className={s.contentStyle}>
                <article className={s.articleStyle}>
                    <h3>My Top 10 food</h3>
                    <div className={s.foodList}>
                        <h4>1. Hawaiian Pizza</h4>
                        <p>Overhated. Pineapple good</p>
                        <img className={s.foodPic} src={Hawaiian} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>2. Pepperoni Pizza</h4>
                        <p>Basic but good sometime too salty</p>
                        <img className={s.foodPic} src={Pepperoni} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>3. Mcdonals's Tasty Cheese</h4>
                        <p>Nice and cheap</p>
                        <img className={s.foodPic} src={Tasty} alt="" />

                    </div>
                    <div className={s.foodList}>
                        <h4>4. KFC</h4>
                        <p>Fried chicken tasty</p>
                        <img className={s.foodPic} src={KFC} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>5. Flæskestegssandwich</h4>
                        <p>Good but tooth hurt</p>
                        <img className={s.foodPic} src={Flaeskestegssandwich} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>6. Any pizza with Heinz Tomato Ketchup</h4>
                        <p>Heinz good. Beauvais Bad</p>
                        <img className={s.foodPic} src={Ketchuppizza} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>7. Red Onion</h4>
                        <p>Raw good. Cooked bad</p>
                        <img className={s.foodPic} src={Redonion} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>8. Any Thai Streetfood</h4>
                        <p>Anything good</p>
                        <img className={s.foodPic} src={Crocodile} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>9. Mozzarella Sticks</h4>
                        <p>Love melted cheese</p>
                        <img className={s.foodPic} src={Mozzarella} alt="" />
                    </div>
                    <div className={s.foodList}>
                        <h4>10. Sushi</h4>
                        <p>Some good some bad. Eel sushi best</p>
                        <img className={s.foodPic} src={Sushi} alt="" />
                    </div>

                </article>
            </main>
        </>


    )
}