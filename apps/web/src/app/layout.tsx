import * as React from "react";

import "@styles/index.scss";

interface Props {
	children: React.ReactNode;
}

const RootLayout = (props: Props) => {
	return (
		<html lang={"en"}>
			<head>
				<link rel="icon" href="/favicon.svg"/>
				
				<title>title</title>
				
				<meta name="description" content="Buy high-quality bicycle parts and save money while riding through Nevada."/>
			</head>
			<body>
				{props.children}
			</body>
		</html>
	);
};


export default RootLayout;