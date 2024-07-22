const Logo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 325 88"
		{...props}
	>
		<path
			fill="currentColor"
			d="M51.104 1.536a4 4 0 0 1 4 4v57.28a4 4 0 0 1-4 4H44.72a4 4 0 0 1-3.289-1.723L19.673 33.664c-2.232-3.224-7.289-1.644-7.289 2.277v26.875a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V5.536a4 4 0 0 1 4-4h6.29a4 4 0 0 1 3.287 1.72l21.76 31.362c2.235 3.22 7.287 1.64 7.287-2.28V5.536a4 4 0 0 1 4-4h4.48ZM90.642 67.968c-7.36 0-13.12-2.208-17.28-6.624-4.096-4.48-6.144-10.464-6.144-17.952 0-7.424 2.144-13.344 6.432-17.76 4.352-4.416 10.272-6.624 17.76-6.624 7.744 0 13.728 2.304 17.952 6.912 4.288 4.544 6.432 10.528 6.432 17.952 0 7.424-2.304 13.312-6.912 17.664-4.608 4.288-10.688 6.432-18.24 6.432Zm12.288-24.096c0-4.416-.992-7.872-2.976-10.368-1.92-2.56-4.672-3.84-8.256-3.84-3.648 0-6.496 1.12-8.544 3.36-2.048 2.24-3.072 5.664-3.072 10.272 0 4.608.864 8.096 2.592 10.464 1.792 2.368 4.512 3.552 8.16 3.552 3.584 0 6.496-1.056 8.736-3.168 2.24-2.176 3.36-5.6 3.36-10.272ZM159.723 66.675c.214 2.16-1.332 4.094-3.491 4.322C152.213 71.42 145.911 72 141.5 72c-4.543 0-10.409-.615-13.931-1.04-1.813-.22-3.215-1.67-3.413-3.486L124 66.046c-.284-2.615 1.988-4.8 4.598-4.484 3.658.445 8.575.938 12.402.938 4.267 0 10.106-.612 13.997-1.088 2.265-.277 4.339 1.352 4.564 3.623l.162 1.64ZM165.033 34.464c0-10.048 2.624-18.24 7.872-24.576 5.248-6.4 12.64-9.696 22.176-9.888 10.24 0 17.824 3.296 22.752 9.888 4.928 6.592 7.392 14.56 7.392 23.904 0 10.112-2.656 18.368-7.968 24.768-5.248 6.4-12.64 9.6-22.176 9.6-10.176 0-17.728-3.264-22.656-9.792-4.928-6.592-7.392-14.56-7.392-23.904Zm12.96-.096c0 6.848 1.376 12.448 4.128 16.8 2.752 4.352 7.04 6.528 12.864 6.528 5.248 0 9.44-1.952 12.576-5.856 3.136-3.904 4.704-9.92 4.704-18.048 0-6.784-1.376-12.352-4.128-16.704-2.752-4.352-7.04-6.528-12.864-6.528-5.12 0-9.28 2.144-12.48 6.432-3.2 4.288-4.8 10.08-4.8 17.376ZM257.981 57.312c4.288 0 7.296-1.536 9.024-4.608 1.728-3.136 2.592-6.304 2.592-9.504 0-3.648-.768-6.912-2.304-9.792-1.536-2.88-4.64-4.32-9.312-4.32-1.344 0-2.752.256-4.224.768a16.32 16.32 0 0 0-2.143.854c-1.219.588-1.889 1.883-1.889 3.237v18.412c0 1.405.726 2.732 1.996 3.334.663.315 1.342.599 2.036.851 1.472.512 2.88.768 4.224.768Zm-20.64-33.056a4 4 0 0 1 4-4h2.164c.115 0 .228.005.343.012.646.043 3.017.159 5.152-.268 2.5-.5 2-.5 5-1 2.855-.476 6.838-.56 7.216-.567l.061-.001c6.833.007 12.07 2.375 15.712 7.104 3.648 4.736 5.472 10.624 5.472 17.664 0 7.04-1.888 12.928-5.664 17.664-3.712 4.736-8.896 7.104-15.552 7.104-1.664 0-3.552-.288-5.664-.864-2.744-.772-5.856 1.092-5.856 3.943v12.131a4 4 0 0 1-3.691 3.988l-4.384.34a4 4 0 0 1-4.309-3.988V24.256ZM321.407 29.024c-.873 2.084-3.289 3.002-5.42 2.254a32.783 32.783 0 0 0-2.417-.75c-1.92-.576-3.967-.864-6.143-.864-1.6 0-2.849.32-3.745.96-.832.576-1.247 1.408-1.247 2.496 0 .768.511 1.504 1.535 2.208 1.088.704 2.817 1.472 5.185 2.304a39.894 39.894 0 0 1 10.848 5.952c3.328 2.496 4.992 5.76 4.992 9.792 0 4.608-1.664 8.192-4.992 10.752-3.264 2.56-8.064 3.84-14.4 3.84-1.984 0-4.641-.384-7.969-1.152-2.073-.488-3.928-1.157-5.562-2.007-1.61-.836-2.114-2.807-1.419-4.482l.977-2.355c.868-2.092 3.291-3.023 5.424-2.26.882.316 1.747.593 2.597.832 2.112.512 4.031.768 5.759.768 2.304 0 4.064-.32 5.28-.96 1.216-.64 1.824-1.472 1.824-2.496 0-1.28-.608-2.432-1.824-3.456-1.216-1.024-3.135-1.952-5.759-2.784a42.584 42.584 0 0 1-10.56-5.184c-3.264-2.304-4.897-5.376-4.897-9.216 0-4.416 1.633-7.872 4.897-10.368 3.264-2.56 7.679-3.84 13.247-3.84 1.984 0 4.544.416 7.68 1.248 1.957.519 3.763 1.187 5.42 2.005 1.711.844 2.306 2.91 1.568 4.668l-.879 2.095Z"
		/>
	</svg>
);

const PrivacyHeader = () => {
	return (
		<div className="mb-12 text-center">
			<Logo className="mx-auto h-12 text-noops-200" />
			<h1 className="font-black">PRIVACY POLICY</h1>
			<p className="mb-1 text-lg font-medium">
				Context Cloud Pty Ltd, trading as Get No_Ops
			</p>
			Australian Business Number: 59 667 290 208 <br />
			Botany NSW 2019 Australia <br />
			May 2024 <br />
		</div>
	);
};

export default PrivacyHeader;