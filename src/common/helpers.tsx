import React from "react";

export const formatParagraph = (text: string) => {
	const maxLength = 60;

	if (text.length >= maxLength) {
		const chunks = [];
		let currentChunk: string[] = [];

		for (const word of text.split(" ")) {
			if (currentChunk.join(" ").length + word.length <= maxLength) {
				currentChunk.push(word);
			} else {
				chunks.push(currentChunk);
				currentChunk = [word];
			}
		}
		chunks.push(currentChunk);

		return (
			<li>
				{chunks.map((chunk, index) => (
					<span key={index}>
						{chunk.map((word, wordIndex) => (
							<React.Fragment key={wordIndex}>
								{word.includes("|") ? (
									<React.Fragment>
										{word.split("|").map((part, partIndex) => (
											<React.Fragment key={partIndex}>
												{partIndex === 1 ? <b>{part}</b> : part}
											</React.Fragment>
										))}
										{word.endsWith("|") ? " " : ""}
									</React.Fragment>
								) : (
									word
								)}
								{wordIndex < chunk.length - 1 && " "}
							</React.Fragment>
						))}
						{index < chunks.length - 1 && " "}
					</span>
				))}
			</li>
		);
	} else {
		return (
			<li>
				<span>
					{text.split(" ").map((word, index) => (
						<React.Fragment key={index}>
							{word.includes("|") ? (
								<React.Fragment>
									{word.split("|").map((part, partIndex) => (
										<React.Fragment key={partIndex}>
											{partIndex === 1 ? <b>{part}</b> : part}
										</React.Fragment>
									))}
									{word.endsWith("|") ? " " : ""}
								</React.Fragment>
							) : (
								word
							)}
							{index < text.split(" ").length - 1 && " "}
						</React.Fragment>
					))}
				</span>
			</li>
		);
	}
};
