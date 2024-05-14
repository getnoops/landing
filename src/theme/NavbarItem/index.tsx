import HorizontalDropdown from "@site/src/components/HorizontalDropdown";
import NavbarItem from "@theme-original/NavbarItem";

const CustomComponents = {
	"custom-horizontalDropdown": (props) => <HorizontalDropdown {...props} />,
};

export default function NavbarItemWrapper(props: any): JSX.Element {
	const CustomComponent = CustomComponents[props.item?.customProps?.type];
	if (CustomComponent) {
		return <CustomComponent {...props.item?.customProps?.props} />;
	}

	return (
		<>
			<NavbarItem {...props} />
		</>
	);
}
