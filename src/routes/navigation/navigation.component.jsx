import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {


    return (

      <Fragment>
        
        {/* use Fragment here instead of </div> */}
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                 <CrwnLogo className="logo" />
            </Link>
          
          <div className='nav-links-container'>
           <Link
        //    use link component so that other browsers understand the functionality
            className="nav-link" to='/shop'>
                Shop
           </Link>
           <Link
        //    use link component so that other browsers understand the functionality
            className="nav-link" to='/sign-in'>
                Sign In
           </Link>
          </div>
        </div>
        {/* outlet goes here as this is where the main home is rendered. If it is put
        above the nav then the nav will be at the bottom */}
        <Outlet />
      </Fragment>
    );
  };

 export default Navigation; 