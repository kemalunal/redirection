/**
 * External dependencies
 */

import React from 'react';
import { translate as __ } from 'lib/locale';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { getPluginPage } from 'lib/wordpress-url';
import MenuItem from './menu-item';
import './style.scss';

const getMenu = () => [
	{
		name: __( 'Redirects' ),
		value: '',
	},
	{
		name: __( 'Site' ),
		value: 'site',
	},
	{
		name: __( 'Groups' ),
		value: 'groups',
	},
	{
		name: __( 'Log' ),
		value: 'log',
	},
	{
		name: __( '404s' ),
		value: '404s',
	},
	{
		name: __( 'Import/Export' ),
		value: 'io',
	},
	{
		name: __( 'Options' ),
		value: 'options',
	},
	{
		name: __( 'Support' ),
		value: 'support',
	},
];

const isCurrent = ( page, item ) => page === item.value || page === 'redirect' && item.value === '';

const Menu = props => {
	const { onChangePage } = props;
	const page = getPluginPage();

	return (
		<div className="subsubsub-container">
			<ul className="subsubsub">
				{
					getMenu()
						.map( ( item, pos ) => <MenuItem key={ pos } item={ item } isCurrent={ isCurrent( page, item ) } onClick={ onChangePage } /> )
						.reduce( ( prev, curr ) => [ prev, ' | ', curr ] )
				}
			</ul>
		</div>
	);
};

Menu.propTypes = {
	onChangePage: PropTypes.func.isRequired,
};

export default Menu;
