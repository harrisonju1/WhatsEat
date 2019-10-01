import React from 'react'
import '../../Styles/HeaderStyles.css'
import {Link} from 'react-router-dom'

export default function GlobalHeader() {
	return (
	<div className='whats-eat-navigation'>
		<div className='global-header'>
			<div className='header-content-box'>
				<div className='whats-eat-header'>
					<a href='/'>
						<div className='whats-eat-header-content'>
							<span aria-label='WhatsEat' className='whats-eat-logo' />
							<div className='logo-divider' />
							<div className='whats-eat-title'>
								<span aria-label='WhatsEat' className='glyph-nav-type-logo'>WhatsEat</span>
							</div>
						</div>
					</a>
				</div>
				<div className='search-bar'>
					<input className='search-input' type='text' autocapitalize='none' placeholder='Search' />
				</div>
				<div className='settings-bar'>
					<div className='settings-content'>
						<div className='setting-item'>
							<a href='/explore' />
						</div>
						<div className='setting-item'>
							<a href='/liked' />
						</div>
						<div className='setting-item'>
							<a href='/settings' />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}