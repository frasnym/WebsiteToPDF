import React from 'react';

type Props = {
	identifier: string;
	id: string;
	value: number;
	changed: (newValue: number, identifier: string) => void;
};

export default function Number({ id, value, changed, identifier }: Props) {
	const changeHandler = (event: React.FormEvent) => {
		const newValue = ((event.target as HTMLInputElement)
			.value as unknown) as number;
		changed(newValue, identifier);
	};

	return (
		<input
			id={id}
			value={value}
			type="number"
			className="block w-full py-1.5 px-3 text-base font-normal bg-clip-padding bg-white border border-solid border-gray-300 appearance-none rounded"
			onChange={changeHandler}
		/>
	);
}
