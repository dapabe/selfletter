import { Letter } from "$/components/Letter";

export default function Home() {
	return (
		<main className="flex min-h-screen justify-center items-center flex-col">
			<h1
				data-theme="retro"
				className="text-center px-4 py-2 roudned-t-md outline outline-1 outline-base-200"
			>
				Palabra de hoy: Honestidad
			</h1>
			<Letter
				date="15/01/2023"
				header={["De: Un 🦆", "Para: La chica de los 🧉"]}
				paragraph="De|s|de qu|e| te vi, supe |que| tendria una re compania, casual en tu forma de ser, talvez impulsiva pero con mucho animo de cosas nuevas e incluso compartir"
			/>
		</main>
	);
}
