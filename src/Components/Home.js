import React from 'react'
import "../Styles/styles.css"
import GlobalHeader from './GlobalHeader/GlobalHeader'
import {Link} from 'react-router-dom'

export default function Home() {
return (
	<div>
		<GlobalHeader/>
		<div className="slider-wrap">
			<section className="home-slider owl-carousel">
				<div className="slider-item hero-1">
					<div className="container">
						<div className="row slider-text align-items-center justify-content-center">
							<div className="col-md-8 text-center col-sm-12 ">
								<h1 >No more wasting time on Yelp with WhatsEat</h1>
								<p><Link to="/explore" className="btn btn-white btn-outline-white home-button">Explore</Link></p>
							</div>
						</div>
					</div>
				</div>
			</section>
	</div>
	</div>
)
}