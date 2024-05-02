import Layout from "@theme/Layout";
import { Hero } from "../components";
import { AwsManaged } from "../content/AwsManaged";
import { Environment } from "../content/Environment";
import { Streamline } from "../content/Streamline";
import { YourTech } from "../content/YourTech";

export default () => {
	return (
		<Layout
			title="Deploy faster than ever"
			description="Deploy your projects faster than ever while keeping best practices and security in mind."
		>
			<div className="bg-noops-50">
				<Hero />

				<AwsManaged />

				<Streamline />

				<YourTech />

				<Environment />
			</div>
		</Layout>
	);
};
