import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/svg";

// Image generation
export default function HeaderIcon() {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					fontSize: 32,
					background: "rgba(0,0,0,0)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<g fill="none">
						<path
							fill="url(#IconifyId18c0bd47d1592d8917880)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917881)"
							d="M8.086 25.52c0 2.4 1.95 4.35 4.26 4.37l2.88.01c.14 0 .26-.12.25-.27c-.14-2.66-2.34-4.81-5.04-4.81h-2.07a.28.28 0 0 0-.28.28v.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917882)"
							d="M16.947 29.2c0-2.4 1.95-4.35 4.26-4.37l2.88-.01c.14 0 .26.12.25.27c-.14 2.66-2.34 4.81-5.04 4.81h-2.07a.28.28 0 0 1-.28-.28v-.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917883)"
							d="M26.947 14.45c.13-1.07-1.19-2.14-3.1-2.67c1.63-1.11 2.52-2.55 2.05-3.51c-.47-.97-2.16-1.15-4.05-.55c.76-1.82.73-3.51-.19-4.06c-.84-.51-2.18.08-3.37 1.35c-.33-1.7-1.15-2.9-2.13-2.91c-1.06-.03-1.97 1.33-2.31 3.22c-1.26-1.45-2.75-2.16-3.64-1.6c-.93.58-.92 2.34-.09 4.19c-1.94-.62-3.68-.42-4.15.58c-.45.97.47 2.4 2.13 3.49c-1.89.56-3.19 1.64-3.04 2.71c.15 1.07 1.7 1.76 3.69 1.78c-1.28 1.5-1.78 3.11-1.07 3.93c.71.82 2.39.55 4.06-.52c-.26 1.95.21 3.58 1.24 3.88c1.04.3 2.3-.84 3.12-2.65c.85 1.78 2.12 2.89 3.15 2.58c1.03-.31 1.48-1.96 1.18-3.92c1.68 1.03 3.35 1.27 4.04.45c.7-.83.17-2.45-1.15-3.93c1.97-.06 3.5-.77 3.63-1.84Zm-10.49-3.03c.09.12.2.22.33.3c.16.09.33.14.52.16c.01.18.04.35.12.5c.08.16.2.3.35.42c-.09.15-.15.31-.17.49c-.02.18.01.36.06.54c-.16.08-.3.18-.41.31c-.12.14-.19.31-.24.49c-.18-.02-.35-.01-.51.04c-.17.05-.33.15-.47.28c-.14-.11-.29-.2-.45-.25c-.18-.05-.36-.05-.54-.02a1.11 1.11 0 0 0-.25-.45a1.28 1.28 0 0 0-.44-.32c.05-.17.06-.34.04-.51c-.03-.18-.1-.35-.2-.51c.13-.12.24-.25.31-.41c.08-.18.11-.38.1-.59c.21-.02.41-.06.58-.17c.13-.08.24-.19.33-.31c.15.06.3.1.46.1c.17 0 .33-.03.48-.09Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917884)"
							d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19Z"
						/>
						<path
							fill="#63332A"
							fill-rule="evenodd"
							d="m21.118 10.281l-.8.8l1.117 1.117l.295-.295a5.888 5.888 0 0 1 .071 2.076l-.366-.366l-1.114 1.114l.96.958a5.887 5.887 0 0 1-2.462 2.594l-1.027-1.023l-1.106 1.106l.515.515a5.886 5.886 0 0 1-2.437-.008l.508-.507l-1.117-1.117l-1.013 1.012a5.889 5.889 0 0 1-1.916-1.717l1.11 1.11l1.112-1.112l-1.112-1.112l-1.112 1.112a5.86 5.86 0 0 1-.523-.891l.928-.928l-1.112-1.112l-.325.325a5.913 5.913 0 0 1 .07-1.994l.255.255l1.096-1.095l-.762-.76c.163-.3.352-.584.564-.85l.905.902l1.12-1.12l-.88-.877a5.86 5.86 0 0 1 .885-.53l.702.7l1.12-1.12l-.107-.105a5.912 5.912 0 0 1 1.633-.007l-.113.113l1.112 1.112l.716-.716c.313.149.61.324.89.523l-.899.9l1.112 1.111l.935-.935c.214.263.406.545.572.842Zm-.392 6.264l-1.113 1.113l-1.114-1.11l1.114-1.114l1.113 1.11ZM11.224 12.9l1.112 1.112l1.098-1.099l-1.113-1.11l-1.097 1.097Zm1.804-1.804l1.114 1.11l1.118-1.118l-1.112-1.111l-1.12 1.12Zm1.827-1.826l1.112 1.11l1.118-1.117l-1.112-1.112l-1.118 1.119Zm1.82 1.817l1.117-1.117l1.112 1.111l-1.116 1.117l-1.113-1.111Zm-1.825 1.825l1.118-1.118l1.112 1.111l-1.116 1.117l-1.114-1.11Zm-1.807 1.807l1.1-1.1l1.114 1.11l-1.102 1.102l-1.112-1.112Zm7.685-1.814L19.61 11.79l-1.116 1.115l1.118 1.116l1.115-1.115Zm-1.822 1.822l-1.118-1.116l-1.116 1.117l1.119 1.115l1.115-1.116Zm-1.822 1.823l-1.12-1.115l-1.102 1.103l1.117 1.117l1.105-1.105Z"
							clip-rule="evenodd"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917885)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917886)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917887)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917888)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917898)"
							d="M17.107 19.75h-2v10.13h2V19.75Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917889)"
							d="M8.094 25.5c0 2.4 1.95 4.35 4.26 4.37l2.88.01c.14 0 .26-.12.25-.27c-.14-2.66-2.34-4.81-5.04-4.81h-2.07a.28.28 0 0 0-.28.28v.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917890)"
							d="M8.094 25.5c0 2.4 1.95 4.35 4.26 4.37l2.88.01c.14 0 .26-.12.25-.27c-.14-2.66-2.34-4.81-5.04-4.81h-2.07a.28.28 0 0 0-.28.28v.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917899)"
							d="M8.094 25.5c0 2.4 1.95 4.35 4.26 4.37l2.88.01c.14 0 .26-.12.25-.27c-.14-2.66-2.34-4.81-5.04-4.81h-2.07a.28.28 0 0 0-.28.28v.42Z"
						/>
						<g filter="url(#IconifyId18c0bd47d1592d8917903)">
							<path
								fill="url(#IconifyId18c0bd47d1592d8917891)"
								d="M8.93 25.917c0 1.856 1.51 3.365 3.296 3.38l2.229.008a.195.195 0 0 0 .193-.209c-.108-2.057-1.81-3.72-3.9-3.72h-1.6c-.124 0-.217.1-.217.216v.325Z"
							/>
						</g>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917892)"
							d="M16.79 29.18c0-2.4 1.95-4.35 4.26-4.37l2.88-.01c.14 0 .26.12.25.27c-.14 2.66-2.34 4.81-5.04 4.81h-2.07a.28.28 0 0 1-.28-.28v-.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917893)"
							d="M16.79 29.18c0-2.4 1.95-4.35 4.26-4.37l2.88-.01c.14 0 .26.12.25.27c-.14 2.66-2.34 4.81-5.04 4.81h-2.07a.28.28 0 0 1-.28-.28v-.42Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917900)"
							d="M16.79 29.18c0-2.4 1.95-4.35 4.26-4.37l2.88-.01c.14 0 .26.12.25.27c-.14 2.66-2.34 4.81-5.04 4.81h-2.07a.28.28 0 0 1-.28-.28v-.42Z"
						/>
						<g filter="url(#IconifyId18c0bd47d1592d8917904)">
							<path
								fill="url(#IconifyId18c0bd47d1592d8917894)"
								d="M17.75 28.606c0-1.79 1.53-3.244 3.341-3.26l2.26-.007c.11 0 .203.09.195.202c-.11 1.983-1.835 3.587-3.953 3.587H17.97a.214.214 0 0 1-.22-.21v-.312Z"
							/>
						</g>
						<g filter="url(#IconifyId18c0bd47d1592d8917905)">
							<path
								fill="url(#IconifyId18c0bd47d1592d8917895)"
								d="M26.947 14.45c.13-1.07-1.19-2.14-3.1-2.67c1.63-1.11 2.52-2.55 2.05-3.51c-.47-.97-2.16-1.15-4.05-.55c.76-1.82.73-3.51-.19-4.06c-.84-.51-2.18.08-3.37 1.35c-.33-1.7-1.15-2.9-2.13-2.91c-1.06-.03-1.97 1.33-2.31 3.22c-1.26-1.45-2.75-2.16-3.64-1.6c-.93.58-.92 2.34-.09 4.19c-1.94-.62-3.68-.42-4.15.58c-.45.97.47 2.4 2.13 3.49c-1.89.56-3.19 1.64-3.04 2.71c.15 1.07 1.7 1.76 3.69 1.78c-1.28 1.5-1.78 3.11-1.07 3.93c.71.82 2.39.55 4.06-.52c-.26 1.95.21 3.58 1.24 3.88c1.04.3 2.3-.84 3.12-2.65c.85 1.78 2.12 2.89 3.15 2.58c1.03-.31 1.48-1.96 1.18-3.92c1.68 1.03 3.35 1.27 4.04.45c.7-.83.17-2.45-1.15-3.93c1.97-.06 3.5-.77 3.63-1.84Zm-10.49-3.03c.09.12.2.22.33.3c.16.09.33.14.52.16c.01.18.04.35.12.5c.08.16.2.3.35.42c-.09.15-.15.31-.17.49c-.02.18.01.36.06.54c-.16.08-.3.18-.41.31c-.12.14-.19.31-.24.49c-.18-.02-.35-.01-.51.04c-.17.05-.33.15-.47.28c-.14-.11-.29-.2-.45-.25c-.18-.05-.36-.05-.54-.02a1.11 1.11 0 0 0-.25-.45a1.28 1.28 0 0 0-.44-.32c.05-.17.06-.34.04-.51c-.03-.18-.1-.35-.2-.51c.13-.12.24-.25.31-.41c.08-.18.11-.38.1-.59c.21-.02.41-.06.58-.17c.13-.08.24-.19.33-.31c.15.06.3.1.46.1c.17 0 .33-.03.48-.09Z"
							/>
						</g>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917901)"
							d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19Z"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917902)"
							fill-rule="evenodd"
							d="m13.55 7.813l.666.666l.971-.971l-.15-.151a5.901 5.901 0 0 1 2.107.033l-.118.118l.971.971l.597-.597c.4.198.775.44 1.118.721l-.796.796l.956.955l.78-.78c.272.353.504.739.69 1.15l-.55.55l.986.987l.015-.015a5.9 5.9 0 0 1-.01 1.857l-.005-.004l-.971.971l.519.52a5.857 5.857 0 0 1-.695 1.142l-.743-.742l-.956.955l.752.753c-.344.278-.72.519-1.123.715l-.548-.548l-.987.987l.05.05a5.892 5.892 0 0 1-1.97.03l.081-.08l-.987-.987l-.616.616a5.859 5.859 0 0 1-1.15-.69l.847-.846l-.956-.955l-.861.86a5.869 5.869 0 0 1-.721-1.117l.663-.663l-.971-.971l-.184.184a5.89 5.89 0 0 1-.013-2.22l.197.197l.987-.986l-.696-.696c.196-.402.437-.779.715-1.123l.9.9l.956-.957l-.89-.89a5.862 5.862 0 0 1 1.143-.695Zm3.543 9.132l-.986.987l-.987-.987l.987-.987l.986.987Zm1.875-1.875l-.955.956l-.987-.987l.956-.956l.986.987Zm1.891-1.89l-.971.971l-.987-.987l.971-.971l.987.987ZM14.2 16.026l.987-.987l-.955-.956l-.987.987l.955.956Zm-1.875-1.875l.987-.987l-.971-.971l-.987.987l.971.971Zm4.737-.987l-.956.956l-.955-.956l.956-.956l.955.956Zm1.89-1.89l-.97.97l-.956-.955l.971-.971l.956.956Zm-4.72.97l.955-.955l-.971-.971l-.956.956l.972.97ZM17.078 9.4l-.971.97l-.972-.97l.972-.972l.97.972Z"
							clip-rule="evenodd"
						/>
						<path
							fill="url(#IconifyId18c0bd47d1592d8917896)"
							fill-rule="evenodd"
							d="m13.55 7.813l.666.666l.971-.971l-.15-.151a5.901 5.901 0 0 1 2.107.033l-.118.118l.971.971l.597-.597c.4.198.775.44 1.118.721l-.796.796l.956.955l.78-.78c.272.353.504.739.69 1.15l-.55.55l.986.987l.015-.015a5.9 5.9 0 0 1-.01 1.857l-.005-.004l-.971.971l.519.52a5.857 5.857 0 0 1-.695 1.142l-.743-.742l-.956.955l.752.753c-.344.278-.72.519-1.123.715l-.548-.548l-.987.987l.05.05a5.892 5.892 0 0 1-1.97.03l.081-.08l-.987-.987l-.616.616a5.859 5.859 0 0 1-1.15-.69l.847-.846l-.956-.955l-.861.86a5.869 5.869 0 0 1-.721-1.117l.663-.663l-.971-.971l-.184.184a5.89 5.89 0 0 1-.013-2.22l.197.197l.987-.986l-.696-.696c.196-.402.437-.779.715-1.123l.9.9l.956-.957l-.89-.89a5.862 5.862 0 0 1 1.143-.695Zm3.543 9.132l-.986.987l-.987-.987l.987-.987l.986.987Zm1.875-1.875l-.955.956l-.987-.987l.956-.956l.986.987Zm1.891-1.89l-.971.971l-.987-.987l.971-.971l.987.987ZM14.2 16.026l.987-.987l-.955-.956l-.987.987l.955.956Zm-1.875-1.875l.987-.987l-.971-.971l-.987.987l.971.971Zm4.737-.987l-.956.956l-.955-.956l.956-.956l.955.956Zm1.89-1.89l-.97.97l-.956-.955l.971-.971l.956.956Zm-4.72.97l.955-.955l-.971-.971l-.956.956l.972.97ZM17.078 9.4l-.971.97l-.972-.97l.972-.972l.97.972Z"
							clip-rule="evenodd"
						/>
						<g filter="url(#IconifyId18c0bd47d1592d8917906)">
							<path
								stroke="url(#IconifyId18c0bd47d1592d8917897)"
								stroke-linecap="round"
								stroke-width=".5"
								d="M11.422 25.547c1.156.156 3.039 1.514 3.226 3.551"
							/>
						</g>
						<defs>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917880"
								x1="16.108"
								x2="16.108"
								y1="29.885"
								y2="19.752"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset=".011" stop-color="#8ED800" />
								<stop offset="1" stop-color="#008461" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917881"
								x1="15.211"
								x2="7.089"
								y1="29.489"
								y2="24.8"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset=".011" stop-color="#8ED800" />
								<stop offset="1" stop-color="#008461" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917882"
								x1="18.769"
								x2="25.176"
								y1="28.108"
								y2="25.12"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset=".011" stop-color="#8ED800" />
								<stop offset="1" stop-color="#008461" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917883"
								x1="16.234"
								x2="15.825"
								y1="2.092"
								y2="23.845"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#F8EC1D" />
								<stop offset="1" stop-color="#F7BE1E" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917884"
								x1="16.113"
								x2="15.893"
								y1="7.28"
								y2="18.995"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#9C634D" />
								<stop offset="1" stop-color="#63332A" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917885"
								x1="16.108"
								x2="16.108"
								y1="29.885"
								y2="20.406"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#5DA112" />
								<stop offset="1" stop-color="#74A93F" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917886"
								x1="14.984"
								x2="15.609"
								y1="28.016"
								y2="27.969"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#51923C" />
								<stop offset="1" stop-color="#51923C" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917887"
								x1="17.107"
								x2="16.609"
								y1="28.063"
								y2="28.063"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#51923C" />
								<stop offset="1" stop-color="#51923C" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917888"
								x1="15.016"
								x2="15.453"
								y1="23.656"
								y2="23.672"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#8FB87F" />
								<stop offset="1" stop-color="#8FB87F" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917889"
								x1="12.633"
								x2="8.414"
								y1="24.8"
								y2="30.511"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset=".011" stop-color="#629B53" />
								<stop offset="1" stop-color="#008461" />
								<stop offset="1" stop-color="#4D9055" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917890"
								x1="14.008"
								x2="14.008"
								y1="30.293"
								y2="28.324"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#6F7E82" />
								<stop offset="1" stop-color="#6F7E82" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917891"
								x1="14.648"
								x2="9.383"
								y1="28.824"
								y2="25.464"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#6FA06A" />
								<stop offset="1" stop-color="#619A6A" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917892"
								x1="17.844"
								x2="25.019"
								y1="29.88"
								y2="25.101"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#528C39" />
								<stop offset="1" stop-color="#81BD52" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917893"
								x1="19.281"
								x2="19.281"
								y1="30.219"
								y2="28.813"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#6A806E" />
								<stop offset="1" stop-color="#6A806E" stop-opacity="0" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917894"
								x1="22.75"
								x2="18.842"
								y1="25.339"
								y2="28.573"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#87BE58" />
								<stop offset="1" stop-color="#7BA561" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917895"
								x1="19.813"
								x2="15.563"
								y1="5.563"
								y2="23.375"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFE447" />
								<stop offset="1" stop-color="#F7B44B" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917896"
								x1="16"
								x2="16"
								y1="16.25"
								y2="19.625"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#723152" stop-opacity="0" />
								<stop offset="1" stop-color="#723152" />
							</linearGradient>
							<linearGradient
								id="IconifyId18c0bd47d1592d8917897"
								x1="14.648"
								x2="9.852"
								y1="27.192"
								y2="24.442"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#86AD7A" />
								<stop offset="1" stop-color="#86AD7A" stop-opacity="0" />
							</linearGradient>
							<radialGradient
								id="IconifyId18c0bd47d1592d8917898"
								cx="0"
								cy="0"
								r="1"
								gradientTransform="matrix(0 3.625 -.46875 0 16.313 27.031)"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#83B15D" />
								<stop offset="1" stop-color="#83B15D" stop-opacity="0" />
							</radialGradient>
							<radialGradient
								id="IconifyId18c0bd47d1592d8917899"
								cx="0"
								cy="0"
								r="1"
								gradientTransform="rotate(158.54 4.035 13.81) scale(4.86879 6.63165)"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset=".841" stop-color="#92B196" stop-opacity="0" />
								<stop offset="1" stop-color="#92B196" />
							</radialGradient>
							<radialGradient
								id="IconifyId18c0bd47d1592d8917900"
								cx="0"
								cy="0"
								r="1"
								gradientTransform="matrix(-.79687 .82813 -.17558 -.16895 24 25.016)"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#9DD271" />
								<stop offset="1" stop-color="#9DD271" stop-opacity="0" />
							</radialGradient>
							<radialGradient
								id="IconifyId18c0bd47d1592d8917901"
								cx="0"
								cy="0"
								r="1"
								gradientTransform="matrix(-7.75002 4.09373 -3.59354 -6.80308 21.438 11.906)"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#966261" />
								<stop offset="1" stop-color="#7B454A" />
							</radialGradient>
							<radialGradient
								id="IconifyId18c0bd47d1592d8917902"
								cx="0"
								cy="0"
								r="1"
								gradientTransform="rotate(146.31 8.459 8.907) scale(6.08437)"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#8C6161" />
								<stop offset="1" stop-color="#693542" />
							</radialGradient>
							<filter
								id="IconifyId18c0bd47d1592d8917903"
								width="7.218"
								height="5.43"
								x="8.181"
								y="24.625"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									result="effect1_foregroundBlur_28327_7424"
									stdDeviation=".375"
								/>
							</filter>
							<filter
								id="IconifyId18c0bd47d1592d8917904"
								width="6.997"
								height="4.988"
								x="17.15"
								y="24.739"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									result="effect1_foregroundBlur_28327_7424"
									stdDeviation=".3"
								/>
							</filter>
							<filter
								id="IconifyId18c0bd47d1592d8917905"
								width="21.911"
								height="22.258"
								x="5.045"
								y="1.8"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feColorMatrix
									in="SourceAlpha"
									result="hardAlpha"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								/>
								<feOffset dy="-.3" />
								<feGaussianBlur stdDeviation=".5" />
								<feComposite
									in2="hardAlpha"
									k2="-1"
									k3="1"
									operator="arithmetic"
								/>
								<feColorMatrix values="0 0 0 0 0.775 0 0 0 0 0.571832 0 0 0 0 0.287396 0 0 0 1 0" />
								<feBlend in2="shape" result="effect1_innerShadow_28327_7424" />
								<feColorMatrix
									in="SourceAlpha"
									result="hardAlpha"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								/>
								<feOffset dy=".25" />
								<feGaussianBlur stdDeviation=".375" />
								<feComposite
									in2="hardAlpha"
									k2="-1"
									k3="1"
									operator="arithmetic"
								/>
								<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.972549 0 0 0 0 0.427451 0 0 0 1 0" />
								<feBlend
									in2="effect1_innerShadow_28327_7424"
									result="effect2_innerShadow_28327_7424"
								/>
							</filter>
							<filter
								id="IconifyId18c0bd47d1592d8917906"
								width="4.727"
								height="5.051"
								x="10.672"
								y="24.797"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									result="effect1_foregroundBlur_28327_7424"
									stdDeviation=".25"
								/>
							</filter>
						</defs>
					</g>
				</svg>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
