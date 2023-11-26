"use client";

import { FC } from "react";
import { Icon } from "./Icon";
import { useToggle } from "$/hooks/useToggle";
import { formatParagraph } from "$/common/helpers";

interface Props {
	date: [number, number, number];
	header: string[];
	paragraph: string;
}

export const Letter: FC<Props> = ({ paragraph, date, header }) => {
	const [isOpen, toggleEye] = useToggle();

	const hightlight = {
		className: isOpen ? "text-error" : "text-neutral font-normal ",
	};

	return (
		<article className="card card-bordered shadow-lg w-full max-w-xs sm:max-w-lg">
			<div className="absolute -top-2 -left-2 scale-150">
				<Icon.Doodle />
			</div>
			<time className="absolute -right-2 -top-2 p-2 bg-base-100 outline outline-1 outline-base-200 rounded-md shadow-md font-mono">
				{new Intl.DateTimeFormat("es-ES", {
					dateStyle: "short",
				}).format(new Date(...date))}
			</time>
			<main className="card-body px-5 pb-10">
				<ul
					className={`underline-row ${
						isOpen ? "[&_b]:text-error" : "[&_b]:font-normal"
					}`}
				>
					{header.map((x) => (
						<li key={x} className="no-row">
							<span>{x}</span>
						</li>
					))}
					{formatParagraph(paragraph)}
				</ul>
				<div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
					<button
						type="button"
						className="btn btn-circle bg-base-100 shadow-md p-4 w-min h-min text-neutral"
						onClick={toggleEye}
					>
						{isOpen ? <Icon.EyeOpen /> : <Icon.EyeClosed />}
					</button>
				</div>
			</main>
		</article>
	);
};
