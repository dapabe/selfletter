import { useMemo, useState } from "react";

/**
 *  Inicializo con `false` \
 *  Devuelve el booleano inicial y un callback que lo alterna.
 *  @returns [isValid, toggleValid]
 */
export function useToggle(bool = false): [boolean, () => void] {
	const [b, s] = useState(Boolean(bool));

	//Currying
	const t = useMemo(() => () => s((x) => !x), []);
	return [b, t];
}
