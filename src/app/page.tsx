import { Letter } from "$/components/Letter";

export default function Home() {
	return (
		<main className="flex min-h-screen justify-center items-center">
			<Letter
				date={[2023, 1, 15]}
				header={["De: Un 🦆", "Para: Chica 🧉"]}
				paragraph="Desde que te vi, |s|upe que eras una hermosa chica"
			/>
		</main>
	);
}
