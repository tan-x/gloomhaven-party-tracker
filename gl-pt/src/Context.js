import React from 'react';

const StatContext = React.createContext({
	stats: {},
	setStats: () => {},
});
export default StatContext;
