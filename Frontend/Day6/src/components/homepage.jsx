import Navbar from "./navbar"
import Slider from "./slider"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/homepage.css'
import Footer from "./footer";

const Homepage = () =>{
    return(
        <div className="home-page">
        <Navbar/>
        
        <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="home-h2">Explore our famous Boat Houses from Kerala</h2>
        <Slider/>
        <Divider/>
<br/>
        
<h2 id="top-boats" className="t1">Top Boats</h2>
        <div className="card-body1">

        <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000"  className='c1' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708520856/jcthouseboat_ghforl.jpg"
          alt="jct"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            JCT Housetboat
          </Typography>
          <div className='c'>
          <p className='c-p'>#1 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.5/10</h2>
          </div>
          <h3 className="h-h3">About JCT</h3>
          <p className="h-p">Providing unique accommodation on water, JCT Houseboats is a wooden boat offering overwater rooms. It has a common kitchen and sun deck. A restaurant is available. JCT Houseboats is 5.8 km from Alleppey Railway Station.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-7500</h2>
          <button className='c1-btn'><Link className="h-link" to ="/jct">Book Now</Link></button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='c2' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521222/grantvilla_murpsc.jpg"
          alt="grandvilla"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grand Villa
          </Typography>
          <div className='c'>
          <p className='c-p'>#2 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.4/10</h2>
          </div>
          <h3 className="h-h3">About GRAND VILLA</h3>
          <p className="h-p">49 km from Cochin Shipyard, Grand Villa Houseboat is a sustainable property situated in Kumarakom and features air-conditioned rooms with free WiFi and parking on-site.</p>
          <div className='c1'>
          <p className='c2-p'>Prices from..</p>
          <h2 className='c2-h2'>Rs/-6500</h2>
          <button className='c2-btn'>Book Now</button>
          </div>
         </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" className='c3' sx={{ maxWidth: 300 }}>
    
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521586/crusi_ifqgyk.jpg"
          alt="crusi"
        />
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Spice Coast Cruises
          </Typography>
          <div className='c'>
          <p className='c-p'>#3 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.3/10</h2>
          </div>
          <h3 className="h-h3">About SPICE COAST CRUISES</h3>
          <p className="h-p">Spice Coast Cruises houseboat offers luxury sailing on Keralas tranquil backwaters.The houseboat is anchored in Kumarakom, and visitors may walk 3 kilometers to the Kumarakom Bird Sanctuary.</p>
          <div className='c1'>
          <p className='c3-p'>Prices from..</p>
          <h2 className='c3-h2'>Rs/-7000</h2>
          <button className='c3-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000" className='c4' sx={{ maxWidth: 300 }}>
    
    <CardActionArea>
      <CardMedia className='cm'
        component="img"
        height="200"
        image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708940031/kera_p0gjuq.jpg"
        alt="kera"
      />
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Kera 
        </Typography>
        <div className='c'>
        <p className='c-p'>#4 in Boat Houses in kerala</p>
        <h2 className='c-h2'>9.2/10</h2>
        </div>
        <h3 className="h-h3">About KERA</h3>
        <p className="h-p">Boasting a shared lounge and views of garden, Kera Houseboats Alleppey is a sustainable boat situated in Alleppey, 2.3 km from Mullakkal Rajarajeswari Temple. </p>
        <div className='c1'>
        <p className='c4-p'>Prices from..</p>
        <h2 className='c4-h2'>Rs/-8200</h2>
        <button className='c4-btn'>Book Now</button>
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
    </div>
    {/* end of carbody 1 */}


    <h2 className="service">SERVICES</h2>
    <div className='cardbody1-d'>
    <div className="d1">
<h2>Rental Services</h2>
<p>Our platform offers diverse waterfront accommodations, from cozy cottages to luxurious floating homes. Guests can easily browse listings, view detailed descriptions, and book their desired boathouse with a few clicks. Whether its a romantic getaway or a group retreat, we provide the perfect setting for an unforgettable waterfront escape.</p>
    </div>
    <div className="d1">
    <h2>Property Management</h2>
<p>We ensure high standards of cleanliness, safety, and comfort for owners and guests. Our comprehensive solutions guarantee every boathouse meets strict quality standards. From regular maintenance checks to prompt response to guest inquiries, we handle all aspects of property management with professionalism. Owners trust us to protect their investment and provide guests with an exceptional experience.</p>
    </div>
    <div className="d1">
    <h2>Customer Support</h2>
<p>Our dedicated team provides 24/7 assistance to guests. Whether its helping with booking inquiries or addressing concerns during the rental period, we ensure a smooth and hassle-free experience. With personalized attention and prompt assistance, we exceed guests expectations, earning their trust and loyalty.</p>
    </div>
    <div className="d1">
    <h2>Amenities and Additional Services</h2>
<p>In addition to rentals and property management, we offer amenities and services to enhance the guest experience. From online payment processing to insurance coverage options, we prioritize convenience and safety. Guests can also use our concierge services to arrange boat rentals, water sports equipment, and more, ensuring a tailored stay. With our commitment to excellence, we make every boathouse booking memorable.</p>

    </div>
    </div>

   <hr/>

   <h2 id="luxury" className="lux">Luxury Boats</h2>

     {/* start of cardboay 2 */}
<div className="b2">
<div className="card-body2">
    <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='c5' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/harmony_b77qrt.jpg"
          alt="harmony"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Harmony Houseboats
          </Typography>
          <div className='c'>
          <p className='c-p'>#4 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.1/10</h2>
          </div>
          <h3 className="h-h3">About Harmony</h3>
         <p className="h-p">Offering a shared lounge and lake view, Harmony Houseboats is set in Alleppey, 3.8 km from Mullakkal Rajarajeswari Temple and 6.2 km from Alleppey Lighthouse. Boasting room service, this property also provides guests with a sun terrace.</p>
         <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-8000</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
         </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='c6' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/xandari_ymkfos.jpg"
          alt="xandari"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Xandari Riverscapes
          </Typography>
          <div className='c'>
          <p className='c-p'>#5 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.0/10</h2>
          </div>
          <h3 className="h-h3">About Xandari</h3>
          <p className="h-p">Xandari Riverscapes are a fleet of house boats which sails along Vembanad Lake and in the backwaters of Alleppey. The houseboats are docked near Pallathuruthy Bridge.</p> 
          <div className='c1'>
          <p className='c5-p'>Prices from..</p>
          <h2 className='c5-h2'>Rs/-9500</h2>
          <button className='c5-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

<div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" className="about">
    <h3 >About Us</h3> 
    <p className="ap1">At myboat.com, we are passionate about connecting travelers with unique <br/>waterfront accommodations for unforgettable experiences. With a dedication <br/>to excellence and a commitment to customer satisfaction, we strive to be<br/> the premier destination for boathouse rentals worldwide.</p>
    <p className="ap2">Our platform boasts a diverse selection of boathouses, ranging from charming<br/> cottages nestled along tranquil shores to luxurious floating homes with<br/> breathtaking views. Whether youre seeking a romantic retreat, a family <br/>vacation, or a group getaway, we have the perfect boathouse to suit your <br/>preferences and budget.</p>
    <p className="ap3">Backed by a team of professionals with extensive experience in the hospitality<br/> industry, we prioritize cleanliness, safety, and comfort in every boathouse <br/>listed on our platform. We work closely with boathouse owners to <br/>ensure that their properties meet our strict quality standards, providing guests<br/> with peace of mind and an exceptional stay.</p>
  </div>

    </div>
<hr/>
<h2 id="budget-friendly" className="bf">Budget Friendly</h2>
<p data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="bfp">Introducing MyBook.com, the premier boathouse booking app that brings you unparalleled access to budget-friendly waterfront accommodations. Whether you are craving a serene lakeside retreat or envisioning a cozy getaway on the river, MyBook.com has you covered.With seamless booking processes and a commitment to affordability, MyBook.com empowers you to embark on unforgettable waterfront experiences without compromise. Start planning your next adventure today with MyBook.com and discover the perfect boathouse getaway that wont stretch your budget.</p>
    <div className="cb">
    <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000"  className='c7' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/harmony_b77qrt.jpg"
          alt="harmony"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Harmony
          </Typography>
          <div className='c'>
          <p className='c-p'>#5 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.2/10</h2>
          </div>
          <h3 className="h-h3">About HARMONY</h3>
          <p className="h-p">Offering a shared lounge and lake view, Harmony Houseboats is set in Alleppey, 3.8 km from Mullakkal Rajarajeswari Temple and 6.2 km from Alleppey Lighthouse. Boasting room service, this property also provides guests with a sun terrace.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-5000</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"  className='c8' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/xandari_ymkfos.jpg"
          alt="xandari"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Xandari Riverscapes
          </Typography>
          <div className='c'>
          <p className='c-p'>#6 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.1/10</h2>
          </div>
          <h3 className="h-h3">About XANDARI</h3>
          <p className="h-p">Xandari Riverscapes are a fleet of house boats which sails along Vembanad Lake and in the backwaters of Alleppey. The houseboats are docked near Pallathuruthy Bridge.</p>
          <div className='c1'>
          <p className='c8-p'>Prices from..</p>
          <h2 className='c8-h2'>Rs/-4500</h2>
          <button className='c8-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  className='c9' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm8'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/vaishnav_zxlvxg.jpg"
          alt="vaishnav"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vaishnav Tours
          </Typography>
          <div className='c'>
          <p className='c-p'>#7 in Boat Houses in kerala</p>
          <h2 className='c-h2'>9.0/10</h2>
          </div>
          <h3 className="h-h3">About VAISHNAV TOURS</h3>
          <p className="h-p">Vaishnav Tours is located in the backwaters of the beautiful and pristine Alleppey. It is 1 km from the one of the largest lakes of India, Vembanad. The air-conditioned accommodation will provide you with a flat-screen satellite TV.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-4200</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000"  className='c10' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='cm'
          component="img"
          height="200"
          image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708942292/sherin_ka8rrf.jpg"
          alt="sterling"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sterling Tours
          </Typography>
          <div className='c'>
          <p className='c-p'>#8 in Boat Houses in kerala</p>
          <h2 className='c-h2'>8.9/10</h2>
          </div>
          <h3 className="h-h3">About STERLING</h3>
          <p className="h-p">Situated within less than 1 km of Mullakkal Rajarajeswari Temple and 2.4 km of Alleppey Lighthouse in Alleppey, Sterling Houseboats Lake Palace, Alleppey provides accommodation with seating area. The property is located 3.</p>
          <div className='c1'>
          <p className='c1-p'>Prices from..</p>
          <h2 className='c1-h2'>Rs/-4000</h2>
          <button className='c1-btn'>Book Now</button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="term">
        <h2>Terms and conditions</h2>
        <p>By using our boathouse booking app, you agree to adhere to the following terms: Users must be 18 years or older to book, and payments are made through designated methods.</p>
        <p>Boathouse owners are responsible for listing accuracy, while guests must treat properties with care. </p>
        <p>Cancellation policies vary per listing, and the app is not liable for disputes or damages. </p>
        <p>Intellectual property rights are reserved, and users should review terms periodically for updates.</p>
    </div>
   <Footer/>
        </div>
       
    )

}
export default Homepage