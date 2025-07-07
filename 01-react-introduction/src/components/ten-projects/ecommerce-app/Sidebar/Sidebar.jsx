// components
import Category from './Category/Category';
import Color from './Color/Color';
import Price from './Price/Price';

const Sidebar = () => {
	return (
		<>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price />
        <Color />
      </section>
		</>
	);
};

export default Sidebar;
