import type { Input as InputPrimitive } from '@base-ui/react/input'
import { Input, type InputProps } from '@/components/ui/input'

type PreviousPublicInputProps = Omit<
	InputPrimitive.Props,
	'className' | 'size'
> & {
	className?: InputPrimitive.Props['className']
	size?: 'sm' | 'default' | 'lg' | number
	unstyled?: boolean
	nativeInput?: boolean
}

type Assert<T extends true> = T

type InputPropsStillAcceptPreviousPublicShape = Assert<
	PreviousPublicInputProps extends InputProps ? true : false
>

export const inputPropsCompatibilityCheck: InputPropsStillAcceptPreviousPublicShape =
	true

export function InputAcceptsRuntimeNativeBoolean({
	isNative,
}: {
	isNative: boolean
}) {
	return <Input nativeInput={isNative} placeholder="Runtime mode" />
}

const runtimeNativeInput = true as boolean

export const inputPropsAcceptRuntimeNativeBoolean: InputProps = {
	nativeInput: runtimeNativeInput,
	placeholder: 'Runtime mode',
}

export const inputPropsAcceptRuntimeNativeBooleanWithBaseUiProps: InputProps = {
	nativeInput: runtimeNativeInput,
	onValueChange: () => {},
}
