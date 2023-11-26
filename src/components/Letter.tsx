"use client";

import { FC, useState } from "react";
import { Icon } from "./Icon";
import { useToggle } from "$/hooks/useToggle";
import { formatParagraph } from "$/common/helpers";
import Image from "next/image";

interface Props {
	date: string;
	header: string[];
	paragraph: string;
}

export const Letter: FC<Props> = ({ paragraph, date, header }) => {
	const [isOpen, toggleEye] = useToggle();
	// const [num, setnum] = useState<number>(0)

	return (
		<article
			data-theme="retro"
			className="card card-bordered shadow-lg w-full max-w-xs sm:max-w-lg"
		>
			<div className="absolute -top-2 -left-2 scale-150">
				<Icon.Doodle />
			</div>

			<div className="absolute w-24 h-24 top-full left-8">
				<Image src={"/boat.png"} alt="Barco" fill />
			</div>

			<div className="absolute -bottom-10 -left-8 w-24 h-16">
				<Image src={"/cloud-bg.png"} alt="Cloud" fill />
			</div>
			<div className="absolute -bottom-10 -right-8 w-24 h-16">
				<Image src={"/cloud-bg.png"} alt="Cloud" fill />
			</div>
			<section className="absolute -right-2 -top-2 p-2 bg-base-100 outline outline-1 outline-base-200 rounded-md shadow-md font-mono">
				<div className="absolute bottom-full -right-4 w-10 h-10">
					{/* <Image src={"/beetle.svg"} alt="Girasol" fill /> */}
					<Icon.Sunflower />
				</div>
				<time className="z-20">{date}</time>
				<div className="absolute top-0 right-full w-10 h-10 -rotate-90 z-10">
					<Image src={"/beetle-red.svg"} alt="Mariquita" fill />
				</div>
				<div className="absolute top-6 -right-4 w-10 h-10 rotate-[125deg]">
					<Image src={"/beetle.svg"} alt="Bicho verde" fill />
				</div>
			</section>
			<main className="card-body px-5 pb-10">
				<ul
					className={`underline-row [&_b]:font-normal ${
						isOpen &&
						"[&>li:not(.no-row)]:text-base-content/50 [&_b]:text-error"
					}`}
				>
					{header.map((x) => (
						<li key={x} className="no-row">
							<span>{x}</span>
						</li>
					))}
					{formatParagraph(paragraph)}
					<li></li>
				</ul>
				<div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
					<div
						className={`absolute -z-10 top-0 w-14 h-14 bg-base-300/20 rounded-full ${
							isOpen ? "no-animation" : "animate-ping"
						}`}
					></div>
					<button
						type="button"
						className="btn btn-circle bg-base-100 shadow-md p-4 w-min h-min text-neutral z-10"
						onClick={toggleEye}
					>
						{isOpen ? <Icon.EyeOpen /> : <Icon.EyeClosed />}
					</button>
				</div>
			</main>
		</article>
	);
};
