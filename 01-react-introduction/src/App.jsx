import './App.css';
import Footer from './components/01-assignment/Footer';
import Greet from './components/01-assignment/Greet';
import Header from './components/01-assignment/Header';
import MainContent from './components/01-assignment/MainContent';
import WelcomeMessage from './components/02-assignment/WelcomeMessage';
import JSXRules from './components/03-assignment/JSXRules';
// import Greeting from './components/04-assignment/Greeting';
import { ProductInfo } from './components/04-assignment/ProductInfo';
import UserList from './components/05-assignment/UserList';
import ChildrenProps from './components/06-assignment/ChildrenProps';
import Person from './components/06-assignment/Person';
import Product from './components/06-assignment/Product';
import { Greeting } from './components/07-assignemnt/Greeting';
import UserStats from './components/07-assignemnt/UserStats';
import Weather from './components/07-assignemnt/Weather';
import Attributes from './components/08-assignment/attributes';

function App() {
	return (
		<div>
			{/* 08: event handler attributes */}
			{/* <Attributes /> */}

			{/* 07: conditional rendering */}
			{/* <Weather temperature={14} />
			<UserStats isAdmin={false} loggedIn={false} />
			<Greeting greet={'afternoon'} /> */}

			{/* 06: props */}
			{/* <Person name={'Alex'} age={'25'} />
        <Product name={'Samsung'} price={'12,000'} /> */}
			{/* 06.2: how children works with props */}
			{/* <ChildrenProps>
          <h1>Card 1</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </ChildrenProps>
        <ChildrenProps>
          <h1>Card 2</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </ChildrenProps> */}

			{/* 05: map */}
			{/* <UserList /> */}
			{/* <ProductList /> */}

			{/* 04: dynamic data */}
			{/* <Greeting /> */}
			{/* <ProductInfo /> */}

			{/* 03: rules for components */}
			{/* <JSXRules /> */}

			{/* 02: basics */}
			{/* <WelcomeMessage /> */}

			{/* 01: basics */}
			{/* <Header />
        <MainContent />
        <Footer /> */}
		</div>
	);
}

export default App;
