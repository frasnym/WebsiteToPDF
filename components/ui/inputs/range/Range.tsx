import React from 'react';

type Props = {
	id: string;
	min: number;
	max: number;
	step: number;
	value: number;
	changed: (newValue: number) => void;
};

export default function Range({ id, min, max, step, value, changed }: Props) {
	const changeHandler = (event: React.FormEvent) => {
		const newValue = ((event.target as HTMLInputElement)
			.value as unknown) as number;
		changed(newValue);
	};

	return (
		<input
			id={id}
			className="block rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
			type="range"
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={changeHandler}
		/>
	);
}
