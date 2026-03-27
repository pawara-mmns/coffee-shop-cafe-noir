import Navbar from './components/Navbar'
import Home from './sections/Home'
import Vibe from './sections/Vibe'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'

export default function App() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<Home />
			<Vibe />
			<Menu />
			<Gallery />
		</div>
	)
}

