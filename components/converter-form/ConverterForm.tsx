import React, { useRef, useState } from 'react';
import { ErrorProps } from '../../models/error.model';
import Button from '../ui/button/Button';
import Error from '../ui/error/Error';
import RangeInput from '../ui/inputs/range/Range';
import NumberInput from '../ui/inputs/number/Number';
import Label from '../ui/label/Label';
import { ConverterForm as ConverterFormType } from '../../models/converter-form.model';

type Props = {
	submitHandler?: (
		event: React.FormEvent,
		url: string,
		scale: number,
		marginTop: number,
		marginBottom: number,
		marginLeft: number,
		marginRight: number
	) => void;
	error: ErrorProps;
	loading: boolean;
};

export default function ConverterForm({
	submitHandler,
	error,
	loading,
}: Props) {
	// * React useRef Hooks
	const urlInputRef = useRef<HTMLInputElement>(null);
	// * React useState Hooks
	const [showForm, setShowForm] = useState<boolean>(false);
	const [scaleInput, setScaleInput] = useState<number>(1);
	const [marginInput, setMarginInput] = useState<ConverterFormType>({
		controller: {
			marginTop: {
				id: 'margin-top',
				label: 'Margin Top',
				type: 'number',
				value: 20,
			},
			marginBottom: {
				id: 'margin-bottom',
				label: 'Margin Bottom',
				type: 'number',
				value: 40,
			},
			marginLeft: {
				id: 'margin-left',
				label: 'Margin Left',
				type: 'number',
				value: 20,
			},
			marginRight: {
				id: 'margin-right',
				label: 'Margin Right',
				type: 'number',
				value: 20,
			},
		},
	});

	/**
	 * Function to update state of dynamic form
	 * @param newValue number
	 * @param inputIdentifier string
	 */
	const inputChangedHandler = (newValue: number, inputIdentifier: string) => {
		// Update element by ID
		const updatedFormElement = {
			...marginInput.controller[inputIdentifier],
			value: newValue,
		};

		const updatedForm: ConverterFormType = {
			controller: {
				...marginInput.controller,
				[inputIdentifier]: updatedFormElement,
			},
		};

		// Update state
		setMarginInput(updatedForm);
	};

	/**
	 * Function to generate form input then execute submit handler
	 * @param event React.FormEvent
	 */
	const submitHandlerLocal = (event: React.FormEvent) => {
		submitHandler(
			event,
			urlInputRef.current.value,
			scaleInput,
			marginInput.controller.marginTop.value,
			marginInput.controller.marginBottom.value,
			marginInput.controller.marginLeft.value,
			marginInput.controller.marginRight.value
		);
	};

	return (
		<form onSubmit={submitHandlerLocal}>
			{error ? <Error {...error} /> : null}
			<input
				type="text"
				className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
				placeholder="🔎 Paste your prefered URL"
				ref={urlInputRef}
				disabled={loading}
			/>
			<div className="my-5 p-3 border border-solid border-gray-300 rounded-lg">
				<Button
					btnType="secondary"
					text={(showForm ? 'Hide' : 'Show') + ' config'}
					type="button"
					clicked={() => setShowForm(!showForm)}
				/>
				<div className={showForm ? 'block' : 'hidden'}>
					<p className="font-bold text-lg mb-3">
						Custom configurations:
					</p>
					<div className="mb-4">
						<Label htmlFor="scale-input" text="Scale:" />{' '}
						<text>{scaleInput}</text>
						<RangeInput
							id="scale-input"
							min={0.1}
							max={2}
							step={0.1}
							value={scaleInput}
							changed={(newValue: number) =>
								setScaleInput(newValue)
							}
						/>
					</div>
					{Object.keys(marginInput.controller).map((key) => {
						return (
							<div
								key={marginInput.controller[key].id}
								className="mb-4"
							>
								<Label
									htmlFor={marginInput.controller[key].id}
									text={marginInput.controller[key].label}
								/>
								<NumberInput
									identifier={key}
									id={marginInput.controller[key].id}
									value={marginInput.controller[key].value}
									changed={inputChangedHandler}
								/>
							</div>
						);
					})}
				</div>
			</div>

			{/* transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; */}
			<div className="block w-full mt-3 text-right">
				<Button
					btnType="primary"
					text="Convert now!"
					type="submit"
					loading={loading}
				/>
			</div>
		</form>
	);
}
