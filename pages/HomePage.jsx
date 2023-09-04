import React from 'react';
import '../app/assets/styles/HomeStyle.scss';
import aerrow from '../app/assets/image/Icon/Aerrow.png';
import photoFlower from '../app/assets/image/Backround/PhotoFlower.png';
import bowl from '../app/assets/image/Icon/BowlIcon.png';
import email from '../app/assets/image/Icon/EmailIcon.png';
import product from '../app/assets/image/Icon/PhotoProduct.png';

export default function HomePage() {
  return (
    <div className='containerHome'>
      <div className='firstItem'>
        <p className='naturalFoodText'>
          100% Natural Food
        </p>
        <p className='bestText'>
          Choose the best
          healthier way
          of life
        </p>
        <button className='btnExplore'>
          <p>
            Explore Now
          </p>
          <img
            className='imgBnt'
            src={aerrow}
          />
        </button>
      </div>
      <div className='secondItem'>
        <div className='photoOneBlock'>
          <p className='textNatural'>
            Natural!!
          </p>
          <p className='textDescriptionBLockPhoto'>
            Get Garden Fresh Fruits
          </p>
        </div>
        <div className='photoTwoBlock'>
          <p className='otterText'>
            Otter!!
          </p>
          <p className='getProccent'>
            Get 10% off
            on Vegetables
          </p>
        </div>
      </div>
      <div className='thirdItem'>
        <div className='blockOne'>
          <img
            src={photoFlower}
            className='photoFlower'
          />
        </div>
        <div className='blockTwo'>
          <p className='aboutText'>
            About Us
          </p>
          <p className='weText'>
            We Believe in Working
            Accredited Farmers
          </p>
          <p className='simplyText'>
            Simply dummy text of the printing and typesetting industry.
            Lorem had ceased to been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className='bowlBlock'>
            <div className='bowlImageBlock'>
              <img
                className='bowlImg'
                src={bowl}
              />
            </div>
            <div className='textsBowl'>
              <p className='organickText'>Organic Foods Only</p>
              <p className='textSimple'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
          <div className='bowlBlock'>
            <div className='bowlImageBlock'>
              <img
                className='bowlImg'
                src={email}
              />
            </div>
            <div className='textsBowl'>
              <p className='organickText'>Organic Foods Only</p>
              <p className='textSimple'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
          <button className='btnShow'>
            <p>
              Shop Now
            </p>
            <img
              className='imgBnt'
              src={aerrow}
            />
          </button>
        </div>
      </div>
      <div className='fourthItem'>
        <div>
          <p className='textCategories'>
            Categories
          </p>
          <p className='ourProducts'>
            Our Products
          </p>
          <div className='cardsOurProducts'>
            <div className='cardContainer'>
              <div className='blockVegetable'>
                <p className='vegetableText'>
                  Vegetable
                </p>
              </div>
              <img 
                src={product}
                className='imageProduct'
              />
              <p className='namedProduct'>
                Calabrese Broccoli
              </p>
              <hr 
                className='lineProduct'
              />
              <div className='flexBlockProduct'>
                <p className='textOldPrice'>
                  $20.00
                </p>
                <p className='textNewPrice'>
                  $13.00
                </p>
                <img 
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
