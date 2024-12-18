import { ChangeEventHandler, HTMLInputTypeAttribute} from "react";

export function Input({
	label,
	type,
	id,
	name,
	placeholder,
	defaultValue,
	onChange,
	value,
	required,
	children
}: {
	label: string;
	type: HTMLInputTypeAttribute;
	id: string;
	name?: string;
	required?: boolean;
	placeholder?: string;
	defaultValue?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
	children?: any;
}): JSX.Element {
	required = required ?? false;

	return (
		<div style={{width:"100%"}}>
			<label>{label}</label>
			<input style={{width:"100%"}}
				required={required}
				id={id}
				name={name}
				type={type}
				size={50}
				placeholder={placeholder}
				defaultValue={defaultValue}
				onChange={onChange}
				value={value}>
				{children}
			</input>
		</div>
	);
}

export function InputBig({
	label,
	id,
	name,
	placeholder,
	className,
}: {
	label?: string;
	id: string;
	name?: string;
	placeholder?: string;
	className?: string;
}): JSX.Element {
	return (
		<div style={{width:"100%"}}>
			<label>{label}</label>
			<textarea style={{width:"100%", fontFamily:"inherit"}}
				id={id}
				name={name}
				rows={6}
				placeholder={placeholder}>
			</textarea>
		</div>
	);
}
