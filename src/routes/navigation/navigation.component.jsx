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
                SHOP
           </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

 export default Navigation; 